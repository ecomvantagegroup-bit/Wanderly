/* eslint-disable no-unused-vars */
import { defineComponent, ref, watch, nextTick, onMounted, onBeforeUnmount, provide } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { gsap, ScrollTrigger } from '../../utils/gsap.js';
import landing from '../../data/landing.json';
import CityHero from './Hero/CityHero.jsx';
import CityCentral from './Central/CityCentral.jsx';
import CityFooter from './Footer/CityFooter.jsx';
import PlaceSheet from './Sheet/PlaceSheet.jsx';
import './CityPage.css';

/*
  Same idea as the country page:
    >= 768px : one pinned screen, vertical scroll drives the track LEFT
               (Hero -> Places -> Footer). Keep 768px in sync with the css files.
    <  768px : normal vertical page.
  Each section registers with `cityScroll.onReady(...)` and gets { tween, desktop, reduce }.
  Clicking a place opens PlaceSheet (see Sheet/), reached through `citySheet.open(id, el)`.
*/
const DESKTOP = '(min-width: 768px)';
const REDUCE = '(prefers-reduced-motion: reduce)';

// src/data/<country>/<country>cities.json, e.g. src/data/india/indiacities.json
const cityFiles = import.meta.glob('/src/data/*/*cities.json', { import: 'default' });

export default defineComponent({
  name: 'CityPage',

  setup() {
    const route = useRoute();
    const view = ref(null); // { countryId, countryName, city, cities, index }
    const status = ref('loading'); // loading | ready | missing
    const pageRef = ref(null);
    const trackRef = ref(null);
    const fillRef = ref(null);
    const sheetRef = ref(null);

    let mm = null;
    let destroyed = false;
    let runId = 0;
    const handlers = [];

    provide('cityScroll', { onReady: (cb) => handlers.push(cb) });
    provide('citySheet', { open: (id, el) => sheetRef.value?.open(id, el) });

    // tells the page curtain (utils/pageTransition.js) it can lift
    const announceReady = () => window.dispatchEvent(new Event('wanderly:page-ready'));

    const teardown = () => {
      if (mm) {
        mm.revert();
        mm = null;
      }
      handlers.length = 0;
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

          handlers.forEach((cb) => cb({ tween, desktop, reduce }));

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

    const load = async (countryId, cityId) => {
      const mine = ++runId;
      teardown();
      view.value = null;
      status.value = 'loading';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const loader = cityFiles[`/src/data/${countryId}/${countryId}cities.json`];
      if (!loader) {
        status.value = 'missing';
        announceReady();
        return;
      }

      try {
        const json = await loader();
        if (destroyed || mine !== runId) return;

        const cities = json.cities || [];
        const index = cities.findIndex((c) => c.id === cityId);
        if (index < 0) {
          status.value = 'missing';
          announceReady();
          return;
        }

        view.value = {
          countryId,
          countryName: json.countryName || landing.countries.find((c) => c.id === countryId)?.heading || '',
          city: cities[index],
          cities,
          index,
        };
        status.value = 'ready';
        await nextTick(); // let the sections mount and register their handlers
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        if (destroyed || mine !== runId) return;
        build();
      } catch (err) {
        console.warn('[CityPage] could not load city data', err);
        if (mine === runId) {
          status.value = 'missing';
          announceReady();
        }
      }
    };

    watch(
      () => [route.params.id, route.params.city],
      ([id, city]) => {
        if (id && city) load(id, city);
      }
    );
    onMounted(() => load(route.params.id, route.params.city));

    onBeforeUnmount(() => {
      destroyed = true;
      teardown();
    });

    const backTo = () => (route.params.id ? `/${route.params.id}` : '/');

    return () => {
      const v = view.value;
      // The root element belongs to Vue and is never touched by GSAP; the pin lives on
      // the inner .city-page (see the note in CountryPage.jsx).
      return (
        <div class="city-root">
          <div
            class="city-page"
            ref={pageRef}
            style={v?.city?.accent ? { '--accent': v.city.accent } : null}
          >
            <header class="city-hud">
              <RouterLink to={backTo()} class="hud-back">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
                {v?.countryName || 'Back'}
              </RouterLink>
              <span class="hud-brand">Wanderly</span>
            </header>

            {status.value === 'ready' && v ? (
              <>
                <div class="city-track" ref={trackRef}>
                  <CityHero city={v.city} countryName={v.countryName} />
                  <CityCentral city={v.city} />
                  <CityFooter
                    city={v.city}
                    cities={v.cities}
                    index={v.index}
                    countryId={v.countryId}
                    countryName={v.countryName}
                  />
                </div>
                <PlaceSheet ref={sheetRef} places={v.city.places || []} />
              </>
            ) : (
              <div class="city-state">
                {status.value === 'loading' ? (
                  <span class="state-ring" role="status" aria-label="Loading" />
                ) : (
                  <div>
                    <h1>We could not find this city</h1>
                    <p>The guide may not be written yet. Choose another place to start from.</p>
                    <RouterLink to={backTo()} class="state-link">
                      Back to the country
                    </RouterLink>
                  </div>
                )}
              </div>
            )}

            <div class="hud-progress" aria-hidden="true">
              <i ref={fillRef} />
            </div>
          </div>
        </div>
      );
    };
  },
});
