import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import './story.css';
import { gsap, ScrollTrigger, SplitText } from '../../../utils/gsap.js';
import data from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';

export default defineComponent({
  name: 'StorySection',

  setup() {
    const d = data.storySection;

    const sectionRef = ref(null);
    const headingRef = ref(null);
    const bodyRef = ref(null);
    const imageRef = ref(null);
    const animationRef = ref(null);
    const videoRef = ref(null);

    let ctx;
    let destroyed = false;

    const build = () => {
      if (destroyed || !sectionRef.value) return;

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // the video must be muted as a DOM property for autoplay to be allowed
      const video = videoRef.value;
      if (video) {
        video.muted = true;
        if (reduce) video.pause();
        else video.play().catch(() => { });
      }

      if (reduce) return; // show everything as is, no motion

      ctx = gsap.context(() => {
        const splitHead = SplitText.create(headingRef.value, { type: 'words,chars' });
        const splitBody = SplitText.create(bodyRef.value, { type: 'words' });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.value,
              start: 'top 70%',
              toggleActions: 'play none none reverse', // plays back on scroll up
            },
          })
          .from(splitHead.chars, {
            yPercent: 110,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.025,
          })
          .from(
            splitBody.words,
            { y: 14, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.015 },
            '-=0.3'
          )
          .from(
            imageRef.value,
            {
              clipPath: 'inset(100% 0% 0% 0% round 1.5rem)',
              duration: 1,
              ease: 'power3.inOut',
            },
            '-=0.8'
          )
          .from(
            imageRef.value.querySelector('img'),
            { scale: 1.2, duration: 1.2, ease: 'power3.out' },
            '<'
          )
          .from(
            animationRef.value,
            { y: 60, scale: 0.9, opacity: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
          );
      }, sectionRef.value);

      // Recalculate once the image has loaded
      const img = imageRef.value && imageRef.value.querySelector('img');
      if (img && !img.complete) {
        img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
      }
    };

    onMounted(() => {
      // wait for fonts so SplitText measures the final text
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(build);
      } else {
        build();
      }
    });

    onBeforeUnmount(() => {
      destroyed = true;
      if (ctx) ctx.revert();
    });

    return () => (
      <section ref={sectionRef} id={d.id} class="story-section-container">
        <div class="story-content">
          <h2 ref={headingRef}>{d.heading}</h2>
          <p ref={bodyRef}>{d.body}</p>
        </div>

        <div class="story-image" ref={imageRef}>
          <img src={asset(d.visuals.image)} alt={d.heading} loading="lazy" />
        </div>

        <div id="story-card" ref={animationRef}>
          <video
            id="story-animation"
            ref={videoRef}
            autoplay
            loop
            muted
            playsinline
            aria-hidden="true"
          >
            <source src={asset(d.visuals.animation)} type="video/mp4" />
          </video>
        </div>
      </section>
    );
  },
});
