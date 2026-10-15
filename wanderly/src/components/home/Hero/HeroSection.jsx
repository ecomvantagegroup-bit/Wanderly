import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import './HeroSection.css';
import { gsap, ScrollTrigger, SplitText } from '../../../utils/gsap.js';
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

    // Scroll to whatever section comes right after the hero
    // (the hero may be wrapped in a SectionStack panel, so look one level up first)
    const scrollDown = () => {
      const hero = heroRef.value;
      const next = hero?.closest('.stack-panel')?.nextElementSibling ?? hero?.nextElementSibling;
      if (next) next.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    onMounted(async () => {
      // Wait for fonts so SplitText measures the final glyph sizes
      await document.fonts.ready;
      if (destroyed || !heroRef.value) return;

      ctx = gsap.context(() => {
        // Words slide up from behind a mask: calm and premium
        const heading = new SplitText('#hero-heading', {
          type: 'words',
          mask: 'words',
          wordsClass: 'word',
        });
        // Words (not lines) so nothing needs re-splitting on resize
        const body = new SplitText('#hero-body', { type: 'words', wordsClass: 'bword' });
        splits = [heading, body];

        gsap.set(['#hero-globe', '#hero-text', '#hero-scroll'], { visibility: 'visible' });

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // ---- Frame: the rounded hero settles into place ----
        gsap.from('#hero-canvas', {
          scale: 0.97,
          opacity: 0,
          duration: reduce ? 0.01 : 1.4,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });

        // ---- Background ----
        const bg = '#backImage img';
        const grade = 'contrast(1.04) saturate(1.03) brightness(0.94)';

        // Focus pull: starts soft, dark and zoomed in, then settles
        gsap.fromTo(
          bg,
          { scale: 1.25, filter: 'blur(12px) contrast(1.04) saturate(1.03) brightness(0.55)' },
          {
            scale: 1.1,
            filter: `blur(0px) ${grade}`,
            duration: reduce ? 0.01 : 2.4,
            ease: 'power2.out',
            clearProps: 'filter', // hands the filter back to the CSS grade
          }
        );

        if (!reduce) {
          // Very slow push-in, starts after the intro
          gsap.to(bg, {
            scale: 1.18,
            duration: 30,
            delay: 2.4,
            ease: 'none',
            yoyo: true,
            repeat: -1,
          });

          // Scroll parallax: the picture drifts slower than the page
          gsap.to(bg, {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.value,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });

          // Subtle mouse parallax (desktop only)
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

        // ---- Text and UI timeline ----
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          delay: reduce ? 0 : 0.35,
        });

        tl.from('#hero-globe', { y: -24, scale: 0.94, opacity: 0, duration: 1.3 })
          .from('#hero-brand', { y: 10, opacity: 0, duration: 0.8 }, 0.3)
          .from(heading.words, { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.4)
          .from(
            body.words,
            { y: 10, opacity: 0, filter: 'blur(6px)', duration: 0.7, stagger: 0.015 },
            '-=0.6'
          )
          .from('#hero-cta', { y: 14, opacity: 0, duration: 0.8 }, '-=0.4')
          .from('#hero-scroll', { opacity: 0, duration: 0.8 }, '-=0.3');
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

          <div id="hero-globe">
            <video id="hero-animation" autoplay loop muted playsinline aria-hidden="true">
              <source src={asset(d.animation_card)} type="video/webm" />
            </video>
          </div>

          <div id="hero-text">
            <p id="hero-brand">{d.brand}</p>
            <h1 id="hero-heading">{d.heading}</h1>
            <p id="hero-body">{d.body}</p>
            <button id="hero-cta" type="button" onClick={scrollDown}>
              {d.cta || 'Start exploring'}
            </button>
          </div>

          <button id="hero-scroll" type="button" onClick={scrollDown} aria-label="Scroll down">
            <span class="track">
              <span class="dot" />
            </span>
          </button>
        </div>
      </section>
    );
  },
});
