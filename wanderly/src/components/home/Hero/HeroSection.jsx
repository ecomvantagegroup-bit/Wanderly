import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import './HeroSection.css';
import { gsap, SplitText } from '../../../utils/gsap.js';
import data from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';

export default defineComponent({
  name: 'HeroSection',
  setup() {
    const d = data.hero;
    const heroRef = ref(null);
    let ctx = null;
    let splits = [];
    let onMove = null;
    let destroyed = false;

    // Desktop: the page is a horizontal row, so "next" = scroll to the next panel's x position.
    // Phone: normal vertical page.
    const goNext = () => {
      const panel = heroRef.value?.closest('.h-panel');
      const next = panel?.nextElementSibling;
      if (!next) return;
      if (window.matchMedia('(min-width: 768px)').matches) {
        window.scrollTo({ top: next.offsetLeft, behavior: 'smooth' });
      } else {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    };

    onMounted(async () => {
      await document.fonts.ready; // SplitText needs final glyph sizes
      if (destroyed || !heroRef.value) return;

      ctx = gsap.context(() => {
        const heading = new SplitText('#hero-heading', { type: 'words', mask: 'words', wordsClass: 'word' });
        const body = new SplitText('#hero-body', { type: 'words', wordsClass: 'bword' });
        splits = [heading, body];

        gsap.set(['#hero-card', '#hero-text', '#hero-scroll', '#hero-meta'], { visibility: 'visible' });

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // ---- Background: focus pull, then a very slow push-in ----
        const bg = '#backImage img';
        const grade = 'contrast(1.05) saturate(0.95) brightness(0.9)';

        gsap.fromTo(
          bg,
          { scale: 1.25, filter: `blur(12px) contrast(1.05) saturate(0.95) brightness(0.5)` },
          {
            scale: 1.1,
            filter: `blur(0px) ${grade}`,
            duration: reduce ? 0.01 : 2.4,
            ease: 'power2.out',
            clearProps: 'filter',
          }
        );

        if (!reduce) {
          gsap.to(bg, { scale: 1.18, duration: 30, delay: 2.4, ease: 'none', yoyo: true, repeat: -1 });

          // subtle mouse parallax (desktop pointer only)
          if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            const xTo = gsap.quickTo(bg, 'x', { duration: 1.6, ease: 'power3.out' });
            const yTo = gsap.quickTo(bg, 'y', { duration: 1.6, ease: 'power3.out' });
            onMove = (e) => {
              xTo((e.clientX / window.innerWidth - 0.5) * -24);
              yTo((e.clientY / window.innerHeight - 0.5) * -16);
            };
            window.addEventListener('mousemove', onMove);
          }
        }

        // ---- Intro timeline ----
        gsap
          .timeline({ defaults: { ease: 'power3.out' }, delay: reduce ? 0 : 0.3 })
          .from('#hero-meta', { opacity: 0, y: -10, duration: 0.8 }, 0.2)
          .from('#hero-card', { opacity: 0, y: -16, duration: 1 }, 0.3)
          .from('#hero-rule', { scaleX: 0, transformOrigin: '0 50%', duration: 1.2 }, 0.4)
          .from(heading.words, { yPercent: 110, duration: 1.2, stagger: 0.1 }, 0.5)
          .from(body.words, { y: 10, opacity: 0, duration: 0.7, stagger: 0.012 }, '-=0.6')
          .from('#hero-cta', { y: 12, opacity: 0, duration: 0.8 }, '-=0.4')
          .from('#hero-scroll', { opacity: 0, x: -12, duration: 0.8 }, '-=0.5');
      }, heroRef.value);
    });

    onBeforeUnmount(() => {
      destroyed = true;
      if (onMove) window.removeEventListener('mousemove', onMove);
      ctx?.revert();
      splits.forEach((s) => s.revert());
    });

    return () => (
      <section class="hero-section" ref={heroRef}>
        <div id="hero-canvas">
          <div id="backImage">
            <img src={asset(d.background)} alt="" />
          </div>

          {/* top bar: brand left, small video right */}
          <div id="hero-meta">
            <span id="hero-brand">{d.brand}</span>
          </div>

          <div id="hero-card">
            <video id="hero-animation" autoplay loop muted playsinline aria-hidden="true">
              <source src={asset(d.animation_card)} type="video/webm" />
            </video>
          </div>

          {/* headline block: drifts slower than the page (parallax) */}
          <div id="hero-text" data-speed="0.7">
            <i id="hero-rule" />
            <h1 id="hero-heading">{d.heading}</h1>
            <div id="hero-row">
              <p id="hero-body">{d.body}</p>
              <button id="hero-cta" type="button" onClick={goNext}>
                <span>{d.cta || 'Start exploring'}</span>
                <em>→</em>
              </button>
            </div>
          </div>

          <button id="hero-scroll" type="button" onClick={goNext} aria-label="Scroll to explore">
            <span>Scroll</span>
            <i class="track"><b class="dot" /></i>
          </button>
        </div>
      </section>
    );
  },
});
