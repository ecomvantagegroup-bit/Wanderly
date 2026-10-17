import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import './CentralSection.css';
import data from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';

// No GSAP here: HorizontalStack drives parallax/reveals through data-attributes.
export default defineComponent({
  name: 'CentralSection',
  setup() {
    const countries = data.countries;
    return () => (
      <section class="dest">
        <div class="dest-intro" data-reveal>
          <span class="eyebrow">Destinations</span>
          <h2>Choose where<br />to disappear</h2>
          <i />
        </div>

        {countries.map((c, i) => (
          <article key={c.id} class={['dest-card', i % 2 && 'is-low']} data-reveal>
            <RouterLink to={c.route} class="dest-link">
              <div class="dest-media">
                <img data-speed={0.6} src={asset(c.images.primary)} alt={c.heading} loading="lazy" />
                <img class="hover" data-speed={0.6} src={asset(c.images.hover)} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <div class="dest-meta" data-speed={i % 2 ? 0.5 : -0.4}>
                <span class="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.heading}</h3>
                <p>{c.body}</p>
                <span class="cta">Explore <em>→</em></span>
              </div>
            </RouterLink>
          </article>
        ))}
      </section>
    );
  },
});
