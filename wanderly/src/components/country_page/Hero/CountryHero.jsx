import { defineComponent, inject, ref } from 'vue';
import { gsap, SplitText } from '../../../utils/gsap.js';
import { asset } from '../../../utils/router.jsx';
import './CountryHero.css';

export default defineComponent({
  name: 'CountryHero',
  props: { country: { type: Object, required: true } },

  setup(props) {
    const c = props.country;
    const scroll = inject('countryScroll');

    const rootRef = ref(null);
    const bgRef = ref(null);
    const bgImgRef = ref(null);
    const contentRef = ref(null);
    const nameRef = ref(null);
    const outlineRef = ref(null);
    const bodyRef = ref(null);
    const factsRef = ref(null);
    const cueRef = ref(null);

    const facts = Object.entries(c.quickFacts || {});
    const image = c.images?.hero || c.images?.banner || c.images?.primary;
    const intro = Array.isArray(c.description) ? c.description[0] : c.description;

    scroll.onReady(({ tween, reduce }) => {
      const root = rootRef.value;
      if (!root) return;

      // the css keeps these hidden until the animation is ready
      gsap.set([contentRef.value, factsRef.value, cueRef.value], { visibility: 'visible' });
      if (reduce) return;

      /* ---- the one orchestrated moment: focus pull, then the title rises ---- */
      const name = SplitText.create(nameRef.value, { type: 'words,chars', mask: 'chars' });
      const outline = SplitText.create(outlineRef.value, { type: 'words', mask: 'words' });
      const body = SplitText.create(bodyRef.value, { type: 'words' });

      gsap
        .timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
        .fromTo(
          bgImgRef.value,
          { scale: 1.3, filter: 'blur(14px) brightness(0.45)' },
          { scale: 1.06, filter: 'blur(0px) brightness(0.8)', duration: 2.2, ease: 'power2.out', clearProps: 'filter' },
          0
        )
        .from(name.chars, { yPercent: 115, duration: 1.1, stagger: 0.04 }, 0.3)
        .from(outline.words, { yPercent: 115, duration: 1.1, stagger: 0.08 }, 0.55)
        .from(body.words, { y: 10, opacity: 0, filter: 'blur(6px)', duration: 0.7, stagger: 0.012 }, '-=0.6')
        .from(factsRef.value.children, { x: 60, opacity: 0, duration: 0.9, stagger: 0.1 }, '-=0.8')
        .from(cueRef.value, { opacity: 0, duration: 0.8 }, '-=0.4');

      /* ---- depth while the page slides away to the left ---- */
      if (tween) {
        const scrub = () => ({
          trigger: root,
          containerAnimation: tween,
          start: 'left left',
          end: 'right left',
          scrub: true,
        });
        gsap.to(bgRef.value, { xPercent: 8, ease: 'none', scrollTrigger: scrub() }); // slower than the page
        gsap.to(contentRef.value, { x: '10vw', opacity: 0.2, ease: 'none', scrollTrigger: scrub() });
        gsap.to(factsRef.value, { x: '-12vw', ease: 'none', scrollTrigger: scrub() }); // faster than the page
      }
    });

    return () => (
      <section class="country-hero" ref={rootRef} id="country-hero">
        <div class="hero-bg" ref={bgRef}>
          <img ref={bgImgRef} src={asset(image)} alt="" />
        </div>
        <div class="hero-overlay" />

        <div class="hero-content" ref={contentRef}>
          <h1 class="hero-title" aria-label={c.seo?.h1 || `${c.name} Travel Guide`}>
            <span class="hero-name" ref={nameRef}>{c.name}</span>
            <span class="hero-outline" ref={outlineRef}>Travel Guide</span>
          </h1>
          <p class="hero-body" ref={bodyRef}>{intro}</p>
        </div>

        <div class="hero-facts-wrap">
          <dl class="hero-facts" ref={factsRef}>
            {facts.map(([label, value]) => (
              <div key={label} class="hero-fact">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div class="hero-cue" ref={cueRef} aria-hidden="true">
          <i />
          Scroll to see the cities
        </div>
      </section>
    );
  },
});
