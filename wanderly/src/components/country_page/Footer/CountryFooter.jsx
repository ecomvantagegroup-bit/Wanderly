import { defineComponent, inject, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap, SplitText } from '../../../utils/gsap.js';
import landing from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';
import './CountryFooter.css';

export default defineComponent({
  name: 'CountryFooter',
  props: { country: { type: Object, required: true } },

  setup(props) {
    const c = props.country;
    const scroll = inject('countryScroll');
    const footer = landing.footer.content;
    const others = landing.countries.filter((x) => x.id !== c.id);

    const rootRef = ref(null);
    const titleRef = ref(null);
    const ledeRef = ref(null);
    const tilesRef = ref(null);
    const barRef = ref(null);

    // The page is pinned, so going back to the start rewinds the whole sideways scroll
    const backToStart = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    scroll.onReady(({ tween, reduce }) => {
      const root = rootRef.value;
      if (!root || reduce) return;

      const title = SplitText.create(titleRef.value, { type: 'words', mask: 'words' });

      gsap
        .timeline({
          scrollTrigger: tween
            ? { trigger: root, containerAnimation: tween, start: 'left 70%', toggleActions: 'play none none reverse' }
            : { trigger: root, start: 'top 80%', toggleActions: 'play none none reverse' },
        })
        .from(title.words, { yPercent: 115, duration: 1, ease: 'power3.out', stagger: 0.12 })
        .from(ledeRef.value, { y: 16, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.6')
        .from(tilesRef.value.children, { y: 90, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09 }, '-=0.6')
        .from(barRef.value, { opacity: 0, duration: 0.7 }, '-=0.3');
    });

    return () => (
      <footer class="country-footer" ref={rootRef} id="country-footer">
        <div class="foot-top">
          <h2 class="foot-title" ref={titleRef} data-depth="-0.2">
            <span class="foot-solid">Where to</span>
            <span class="foot-outline">next?</span>
          </h2>
          <div class="foot-side" ref={ledeRef} data-depth="0.3">
            <p>You have seen the best of {c.name}. Pick another country, or start this guide again.</p>
            <button type="button" class="foot-restart" onClick={backToStart}>
              Back to the start
            </button>
          </div>
        </div>

        <div class="foot-tiles" ref={tilesRef} data-depth="0.15" style={{ '--n': others.length }}>
          {others.map((o) => (
            <RouterLink key={o.id} to={o.route} class="foot-tile" data-frame>
              <img src={asset(o.images.primary)} alt="" loading="lazy" draggable="false" data-img-depth="10" />
              <span class="foot-tile-text">
                <strong>{o.heading}</strong>
                <small>Open the guide</small>
              </span>
            </RouterLink>
          ))}
        </div>

        <div class="foot-bar" ref={barRef}>
          <div class="foot-brand">
            <img src={asset(footer.brand.logo)} alt="" />
            <span>{footer.brand.name}</span>
          </div>
          <p class="foot-copy">{footer.copyright}</p>
          <div class="foot-social">
            {footer.social.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <img src={asset(s.icon)} alt="" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  },
});
