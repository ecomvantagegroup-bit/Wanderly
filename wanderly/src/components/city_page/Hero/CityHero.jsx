import { defineComponent, inject, ref } from 'vue';
import { gsap, SplitText } from '../../../utils/gsap.js';
import { asset } from '../../../utils/router.jsx';
import './CityHero.css';

export default defineComponent({
  name: 'CityHero',
  props: {
    city: { type: Object, required: true },
    countryName: { type: String, default: '' },
  },

  setup(props) {
    const c = props.city;
    const scroll = inject('cityScroll');

    const rootRef = ref(null);
    const frameRef = ref(null);
    const imgRef = ref(null);
    const nameRef = ref(null);
    const copyRef = ref(null);
    const bodyRef = ref(null);
    const factsRef = ref(null);
    const cueRef = ref(null);

    const q = c.quickFacts || {};
    const facts = [
      ['Best time', q.bestTime],
      ['Suggested stay', q.suggestedStay],
      ['Known for', q.knownFor],
    ].filter((f) => f[1]);
    const image = c.images?.hero || c.images?.primary;

    scroll.onReady(({ tween, reduce }) => {
      const root = rootRef.value;
      if (!root) return;

      // the css keeps these hidden until the animation is ready
      gsap.set([nameRef.value, copyRef.value, cueRef.value], { visibility: 'visible' });
      if (reduce) return;

      /* ---- the one orchestrated moment: the photo is drawn open, the name rises ---- */
      const name = SplitText.create(nameRef.value, { type: 'chars', mask: 'chars' });
      const body = SplitText.create(bodyRef.value, { type: 'words' });

      gsap
        .timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
        .fromTo(
          frameRef.value,
          { clipPath: 'inset(0% 0% 0% 100% round 4px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 4px)', duration: 1.5, ease: 'power4.inOut' },
          0
        )
        .fromTo(imgRef.value, { scale: 1.3 }, { scale: 1, duration: 2, ease: 'power3.out' }, 0)
        .from(name.chars, { yPercent: 112, duration: 1.1, stagger: 0.05 }, 0.55)
        .from(body.words, { opacity: 0, y: 8, duration: 0.6, stagger: 0.01 }, 0.9)
        .from(factsRef.value.children, { opacity: 0, y: 12, duration: 0.7, stagger: 0.09 }, 1.1)
        .from(cueRef.value, { opacity: 0, duration: 0.8 }, 1.4);

      /* ---- depth while the page slides left ---- */
      if (tween) {
        const scrub = () => ({
          trigger: root,
          containerAnimation: tween,
          start: 'left left',
          end: 'right left',
          scrub: true,
        });
        gsap.to(imgRef.value, { xPercent: 8, ease: 'none', scrollTrigger: scrub() }); // slower than the page
        gsap.to(nameRef.value, { x: '7vw', ease: 'none', scrollTrigger: scrub() });
        gsap.to(copyRef.value, { x: '-6vw', opacity: 0.2, ease: 'none', scrollTrigger: scrub() });
      }
    });

    return () => (
      <section class="city-hero" ref={rootRef} id="city-hero" style={{ '--len': c.name.length }}>
        <div class="chero-frame" ref={frameRef}>
          <img class="chero-img" ref={imgRef} src={asset(image)} alt="" />
        </div>

        <div class="chero-copy" ref={copyRef}>
          <p class="chero-intro" ref={bodyRef}>{c.overview?.[0]}</p>
          <dl class="chero-facts" ref={factsRef}>
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h1 class="chero-name" ref={nameRef} aria-label={c.seo?.h1 || `${c.name} travel guide`}>
          {c.name}
        </h1>

        <div class="chero-cue" ref={cueRef} aria-hidden="true">
          <i />
          Scroll to see the places
        </div>
      </section>
    );
  },
});
