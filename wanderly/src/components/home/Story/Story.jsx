import { defineComponent } from 'vue';
import './story.css';
import data from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';

export default defineComponent({
  name: 'StorySection',
  setup() {
    const d = data.storySection;
    return () => (
      <section id={d.id} class="story">
        <div class="story-text">
          <span class="eyebrow" data-reveal>Our story</span>
          <h2 data-reveal>{d.heading}</h2>
          <p data-reveal>{d.body}</p>
          <div id="story-card" data-reveal>
            <video id="story-animation" autoplay loop muted playsinline aria-hidden="true">
              <source src={asset(d.visuals.animation)} type="video/mp4" />
            </video>
          </div>
        </div>
        <figure class="story-image">
          <img data-speed={0.8} src={asset(d.visuals.image)} alt={d.heading} loading="lazy" />
        </figure>
      </section>
    );
  },
});
