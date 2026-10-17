/* eslint-disable no-unused-vars */
import { defineComponent, ref, watch, nextTick, onMounted, onBeforeUnmount, provide } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { gsap, ScrollTrigger } from '../../utils/gsap.js';
import landing from '../../data/landing.json';
import CountryHero from './Hero/CountryHero.jsx';
import CountryCentral from './Central/CountryCentral.jsx';
import CountryFooter from './Footer/CountryFooter.jsx';
import './CountryPage.css';

/*
  Layout
    >= 768px : one pinned screen. Vertical scroll drives the track LEFT,
               so the page reads  Hero -> Cities -> Footer  sideways.
    <  768px : normal vertical page, same three sections stacked.
  Keep 768px in sync with the media queries in the css files.

  This file owns the horizontal tween. Each section registers a callback with
  `countryScroll.onReady(...)` and receives { tween, desktop, reduce } so its own
  animations can follow the horizontal scroll (containerAnimation: tween).

  Parallax
    The sections only mark what should move, this file does the animating:
      data-depth="n"      moves a whole component. Desktop: sideways (n * 10vw each
                          way). Phones: vertical (n * 60px each way). Negative n reverses.
      data-img-depth="n"  slides a photo inside its frame by n percent each way.
      data-frame          marks the frame the photo slides in (default: the section
                          on desktop, the parent element on phones).
    Never put data-depth on an element that already has its own GSAP x / y tween.
*/
const DESKTOP = '(min-width: 768px)';
const REDUCE = '(prefers-reduced-motion: reduce)';
const SECTION = '.country-hero, .country-central, .country-footer';

// Bundles src/data/<id>/<id>.json - each country becomes its own lazy chunk
const countryFiles = import.meta.glob('/src/data/*/*.json', { import: 'default' });

export default defineComponent({
  name: 'CountryPage',

  setup() {
    const route = useRoute();
    const data = ref(null);
    const status = ref('loading'); // loading | ready | missing
    const pageRef = ref(null);
    const trackRef = ref(null);
    const fillRef = ref(null);

    let mm = null;
    let destroyed = false;
    let runId = 0;
    const handlers = [];

    provide('countryScroll', {
      onReady: (cb) => handlers.push(cb),
    });

    // tells the page curtain (utils/pageTransition.js) it can lift
    const announceReady = () => window.dispatchEvent(new Event('wanderly:page-ready'));

    const teardown = () => {
      if (mm) {
        mm.revert();
        mm = null;
      }
      handlers.length = 0;
    };

    /* ---------- Parallax for every component and image on the page ---------- */
    const applyParallax = ({ tween, desktop, reduce }) => {
      if (reduce || !pageRef.value) return;
      const root = pageRef.value;
      const sideways = desktop && !!tween;

      // the first section starts at scroll 0, the last one never reaches "right left"
      const range = (section) => {
        if (section.classList.contains('country-hero')) return { start: 'left left', end: 'right left' };
        if (section.classList.contains('country-footer')) return { start: 'left right', end: 'right right' };
        return { start: 'left right', end: 'right left' };
      };

      const trigger = (frame, section) =>
        sideways
          ? { trigger: frame, containerAnimation: tween, scrub: true, ...range(section) }
          : { trigger: frame, scrub: true, start: 'top bottom', end: 'bottom top' };

      // whole components
      gsap.utils.toArray('[data-depth]', root).forEach((el) => {
        const depth = parseFloat(el.dataset.depth) || 0;
        const section = el.closest(SECTION) || el;
        const axis = sideways ? 'x' : 'y';
        const amount = (v) => (sideways ? `${v * 10}vw` : v * 60);
        gsap.fromTo(
          el,
          { [axis]: amount(-depth) },
          { [axis]: amount(depth), ease: 'none', scrollTrigger: trigger(sideways ? section : el, section) }
        );
      });

      // images sliding inside their frame
      gsap.utils.toArray('[data-img-depth]', root).forEach((el) => {
        const amt = parseFloat(el.dataset.imgDepth) || 8;
        const section = el.closest(SECTION) || el;
        const frame = el.closest('[data-frame]') || (sideways ? section : el.parentElement);
        const prop = sideways ? 'xPercent' : 'yPercent';
        gsap.fromTo(el, { [prop]: -amt }, { [prop]: amt, ease: 'none', scrollTrigger: trigger(frame, section) });
      });
    };

    const build = () => {
      if (destroyed || !pageRef.value || !trackRef.value) return;

      mm = gsap.matchMedia();
      mm.add(
        { desktop: DESKTOP, reduce: REDUCE },
        (context) => {
          const { desktop, reduce } = context.conditions;
          let tween = null;

          if (desktop) {
            const getDistance = () =>
              Math.max(0, trackRef.value.scrollWidth - window.innerWidth);

            tween = gsap.to(trackRef.value, {
              x: () => -getDistance(),
              ease: 'none',
              scrollTrigger: {
                trigger: pageRef.value,
                start: 'top top',
                end: () => '+=' + getDistance(),
                pin: true,
                scrub: reduce ? true : 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  if (fillRef.value) fillRef.value.style.transform = `scaleX(${self.progress})`;
                },
              },
            });
          }

          // every section builds its animations inside this matchMedia context
          handlers.forEach((cb) => cb({ tween, desktop, reduce }));

          // then the shared parallax pass
          applyParallax({ tween, desktop, reduce });

          return () => {
            if (fillRef.value) fillRef.value.style.transform = 'scaleX(0)';
          };
        },
        pageRef.value
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        announceReady();
      });
    };

    const load = async (id) => {
      const mine = ++runId;
      teardown();
      data.value = null;
      status.value = 'loading';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const loader = countryFiles[`/src/data/${id}/${id}.json`];
      if (!loader) {
        status.value = 'missing';
        announceReady();
        return;
      }

      try {
        const json = await loader();
        if (destroyed || mine !== runId) return;
        data.value = json;
        status.value = 'ready';
        await nextTick(); // let the sections mount and register their handlers
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        if (destroyed || mine !== runId) return;
        build();
      } catch (err) {
        console.warn('[CountryPage] could not load country data', err);
        if (mine === runId) {
          status.value = 'missing';
          announceReady();
        }
      }
    };

    watch(
      () => route.params.id,
      (id) => {
        if (id) load(id);
      }
    );
    onMounted(() => load(route.params.id));

    onBeforeUnmount(() => {
      destroyed = true;
      teardown();
    });

    const meta = () => landing.countries.find((c) => c.id === route.params.id);

    return () => (
      <div
        class="country-page"
        ref={pageRef}
        style={data.value?.accent ? { '--accent': data.value.accent } : null}
      >
        <header class="country-hud">
          <RouterLink to="/" class="hud-back">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
            Home
          </RouterLink>
          <span class="hud-brand">Wanderly</span>
        </header>

        {status.value === 'ready' && data.value ? (
          <div class="country-track" ref={trackRef}>
            <CountryHero country={data.value} />
            <CountryCentral country={data.value} />
            <CountryFooter country={data.value} />
          </div>
        ) : (
          <div class="country-state">
            {status.value === 'loading' ? (
              <span class="state-ring" role="status" aria-label="Loading" />
            ) : (
              <div>
                <h1>{meta()?.heading ?? 'This guide'} is not ready yet</h1>
                <p>We are still writing it. Pick another country in the meantime.</p>
                <RouterLink to="/" class="state-link">
                  Back to all countries
                </RouterLink>
              </div>
            )}
          </div>
        )}

        <div class="hud-progress" aria-hidden="true">
          <i ref={fillRef} />
        </div>
      </div>
    );
  },
});
