import {defineComponent, onMounted, onBeforeMount} from 'vue';
import './HeroSection.css';
import gsap from '../../utils/gsap.js';
import data from '../../data/LandingPageDatajson';

export default defineComponent({
  name: 'HeroSection',
  setup() {
    return () => (
     <section class="hero-section">
        <div id="hero_canvas">
          <div id="hero-text"></div>
          <div id="secondaryCanvas"></div>
        </div>
     </section>
    );
  }
});
