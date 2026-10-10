import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import './HeroSection.css';
import { gsap, SplitText } from '../../../utils/gsap.js';
import data from '../../../data/landing.json';

export default defineComponent({
  name: 'HeroSection',
  setup() {
    const d = data.hero;
    const heroRef = ref(null);
    let ctx = null;
    let splits = [];
    let onMove = null;

    // Scroll to whatever section comes right after the hero
    const scrollDown = () => {
      const next = heroRef.value?.nextElementSibling;
      if (next) next.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    onMounted(async () => {
      // Wait for fonts so SplitText measures the final glyph sizes
      await document.fonts.ready;

      ctx = gsap.context(() => {
        const heading = new SplitText('#hero-heading', {
          type: 'words,chars',
          wordsClass: 'word',
          charsClass: 'char',
        });
        const body = new SplitText('#hero-body', { type: 'lines', linesClass: 'line' });
        splits = [heading, body];

        gsap.set(['#hero-globe', '#hero-text', '#hero-scroll'], { visibility: 'visible' });

        // ---- Cinematic background ----
        const bg = '#backImage img';
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const grade = 'contrast(1.1) saturate(1.12) brightness(0.9)';

        // Focus pull: starts blurred, dark and zoomed in, then settles
        gsap.fromTo(
          bg,
          { scale: 1.3, filter: 'blur(14px) contrast(1.1) saturate(1.12) brightness(0.5)' },
          {
            scale: 1.1,
            filter: `blur(0px) ${grade}`,
            duration: reduce ? 0.01 : 2.6,
            ease: 'power2.out',
            clearProps: 'filter', // hands the filter back to the CSS grade
          }
        );

        if (!reduce) {
          // Slow Ken Burns push-in, starts after the intro
          gsap.to(bg, {
            scale: 1.2,
            duration: 28,
            delay: 2.6,
            ease: 'none',
            yoyo: true,
            repeat: -1,
          });

          // Subtle mouse parallax (desktop only)
          if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            const xTo = gsap.quickTo(bg, 'x', { duration: 1.4, ease: 'power3.out' });
            const yTo = gsap.quickTo(bg, 'y', { duration: 1.4, ease: 'power3.out' });
            onMove = (e) => {
              xTo((e.clientX / window.innerWidth - 0.5) * -30);
              yTo((e.clientY / window.innerHeight - 0.5) * -20);
            };
            window.addEventListener('mousemove', onMove);
          }
        }

        // ---- Text and UI timeline ----
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('#hero-globe', { scale: 0.92, opacity: 0, duration: 1.1 })
          .from('#hero-brand', { y: 12, opacity: 0, duration: 0.6 }, 0.2)
          .from(
            heading.chars,
            {
              yPercent: 120,
              rotateX: -90,
              opacity: 0,
              transformOrigin: '50% 100%',
              duration: 0.9,
              stagger: { each: 0.03, from: 'start' },
            },
            0.3
          )
          .from(body.lines, { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.5')
          .from('#hero-scroll', { y: 16, opacity: 0, duration: 0.7 }, '-=0.3');
      });
    });

    onBeforeUnmount(() => {
      if (onMove) window.removeEventListener('mousemove', onMove);
      ctx?.revert();
      splits.forEach((s) => s.revert());
    });

    return () => (
      <section class="hero-section" ref={heroRef}>
        <div id="hero-canvas">
          <div id="backImage">
            <img src={d.background} alt="" />
          </div>

          <div id="hero-globe">
            <video id="hero-animation" autoplay loop muted playsinline>
              <source src={d.animation_card} type="video/webm" />
            </video>
          </div>

          <div id="hero-text">
            <p id="hero-brand">{d.brand}</p>
            <h1 id="hero-heading">{d.heading}</h1>
            <p id="hero-body">{d.body}</p>
          </div>

          <button id="hero-scroll" type="button" onClick={scrollDown} aria-label="Scroll down">
            <span class="label">Scroll</span>
            <span class="track">
              <span class="dot" />
            </span>
          </button>
        </div>
      </section>
    );
  },
});
