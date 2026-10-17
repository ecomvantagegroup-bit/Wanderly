import { defineComponent, inject, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap, SplitText } from '../../../utils/gsap.js';
import landing from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';
import './CityFooter.css';

export default defineComponent({
  name: 'CityFooter',
  props: {
    city: { type: Object, required: true },
    cities: { type: Array, required: true },
    index: { type: Number, required: true },
    countryId: { type: String, required: true },
    countryName: { type: String, default: '' },
  },

  setup(props) {
    const scroll = inject('cityScroll');
    const brand = landing.footer.content.brand;
    const copyright = landing.footer.content.copyright;

    const hasNext = props.cities.length > 1;
    const next = props.cities[(props.index + 1) % props.cities.length];
    const others = props.cities.filter((c) => c.id !== props.city.id);
    const countryTo = `/${props.countryId}`;
    const nextTo = hasNext ? `/${props.countryId}/${next.id}` : countryTo;
    const nextImage = hasNext ? next.images?.hero || next.images?.primary : null;

    const rootRef = ref(null);
    const nameRef = ref(null);
    const labelRef = ref(null);
    const lineRef = ref(null);
    const frameRef = ref(null);
    const imgRef = ref(null);
    const moreRef = ref(null);
    const barRef = ref(null);

    // the page is pinned, so going back to the start rewinds the whole sideways scroll
    const backToStart = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    scroll.onReady(({ tween, reduce }) => {
      const root = rootRef.value;
      if (!root || reduce || !hasNext) return;

      const name = SplitText.create(nameRef.value, { type: 'chars', mask: 'chars' });

      gsap
        .timeline({
          scrollTrigger: tween
            ? { trigger: root, containerAnimation: tween, start: 'left 70%', toggleActions: 'play none none reverse' }
            : { trigger: root, start: 'top 80%', toggleActions: 'play none none reverse' },
        })
        .from(labelRef.value, { opacity: 0, y: 10, duration: 0.6, ease: 'power2.out' })
        .from(name.chars, { yPercent: 112, duration: 1, ease: 'power3.out', stagger: 0.05 }, 0.1)
        .from(lineRef.value, { opacity: 0, y: 12, duration: 0.7, ease: 'power2.out' }, 0.6)
        .fromTo(
          frameRef.value,
          { clipPath: 'inset(0% 0% 0% 100% round 4px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 4px)', duration: 1.3, ease: 'power4.inOut' },
          0.15
        )
        .from(moreRef.value, { opacity: 0, y: 14, duration: 0.7, ease: 'power2.out' }, 0.8)
        .from(barRef.value, { opacity: 0, duration: 0.7 }, 0.9);

      if (tween) {
        gsap.fromTo(
          imgRef.value,
          { xPercent: -8 },
          {
            xPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: root, containerAnimation: tween, start: 'left 100%', end: 'left 0%', scrub: true },
          }
        );
      }
    });

    return () => (
      <footer class="city-footer" ref={rootRef} id="city-footer">
        <div class="cfoot-main">
          <div class="cfoot-copy">
            <p class="cfoot-label" ref={labelRef}>
              {hasNext ? `Next in ${props.countryName}` : `That is every place in ${props.city.name}`}
            </p>
            <RouterLink to={nextTo} class="cfoot-next">
              <span ref={nameRef}>{hasNext ? next.name : props.countryName}</span>
            </RouterLink>
            <p class="cfoot-line" ref={lineRef}>
              {hasNext ? next.quickFacts?.knownFor : 'Head back to the country to pick somewhere else.'}
            </p>
          </div>

          {hasNext && (
            <div class="cfoot-frame" ref={frameRef}>
              <RouterLink to={nextTo} class="cfoot-link" aria-label={`Open the ${next.name} guide`}>
                <img class="cfoot-img" ref={imgRef} src={asset(nextImage)} alt="" loading="lazy" draggable="false" />
              </RouterLink>
            </div>
          )}
        </div>

        <nav class="cfoot-more" ref={moreRef} aria-label={`More of ${props.countryName}`}>
          <span class="cfoot-more-title">More in {props.countryName}</span>
          <ul>
            {others.map((c) => (
              <li key={c.id}>
                <RouterLink to={`/${props.countryId}/${c.id}`}>{c.name}</RouterLink>
              </li>
            ))}
            <li>
              <RouterLink to={countryTo} class="cfoot-country">All of {props.countryName}</RouterLink>
            </li>
          </ul>
        </nav>

        <div class="cfoot-bar" ref={barRef}>
          <div class="cfoot-brand">
            <img src={asset(brand.logo)} alt="" />
            <span>{brand.name}</span>
          </div>
          <p class="cfoot-copyright">{copyright}</p>
          <button type="button" class="cfoot-start" onClick={backToStart}>
            Back to the start
          </button>
        </div>
      </footer>
    );
  },
});
