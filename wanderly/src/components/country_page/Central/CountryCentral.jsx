import { defineComponent, inject, ref } from 'vue';
import { gsap, ScrollTrigger, SplitText } from '../../../utils/gsap.js';
import { asset } from '../../../utils/router.jsx';
import './CountryCentral.css';

export default defineComponent({
  name: 'CountryCentral',
  props: { country: { type: Object, required: true } },

  setup(props) {
    const c = props.country;
    const scroll = inject('countryScroll');
    const cities = c.cities || [];
    const section = c.citiesSection || {};

    const rootRef = ref(null);
    const ghostRef = ref(null);
    const introRef = ref(null);
    const headRef = ref(null);
    const bodyRef = ref(null);

    /* ---------- Glass tilt + shine (mouse only) ---------- */
    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
      gsap.to(card, {
        rotationY: (x - 0.5) * 12,
        rotationX: (0.5 - y) * 12,
        transformPerspective: 900,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = (e) => {
      if (e.pointerType !== 'mouse') return;
      gsap.to(e.currentTarget, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    scroll.onReady(({ tween, desktop, reduce }) => {
      const root = rootRef.value;
      if (!root) return;
      const slots = gsap.utils.toArray('.city-slot', root);
      const cards = slots.map((s) => s.querySelector('.city-card'));

      if (reduce) {
        cards.forEach((card) => card.classList.add('is-focus'));
        return;
      }

      /* =============== DESKTOP: follows the horizontal scroll =============== */
      if (desktop && tween) {
        const head = SplitText.create(headRef.value, { type: 'words,chars', mask: 'chars' });
        const body = SplitText.create(bodyRef.value, { type: 'words' });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: introRef.value,
              containerAnimation: tween,
              start: 'left 85%',
              toggleActions: 'play none none reverse',
            },
          })
          .from(head.chars, { yPercent: 110, duration: 0.7, ease: 'power3.out', stagger: 0.025 })
          .from(body.words, { y: 12, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.012 }, '-=0.35');

        // the big outlined name drifts slower than the cards
        gsap.fromTo(
          ghostRef.value,
          { x: '-12vw' },
          {
            x: '12vw',
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        );

        slots.forEach((slot, i) => {
          const card = cards[i];
          const fromTop = i % 2 === 0;

          // cards swing in on a curve
          gsap.fromTo(
            card,
            {
              y: () => (fromTop ? -1 : 1) * window.innerHeight * 0.35,
              rotation: fromTop ? -6 : 6,
              scale: 0.88,
              opacity: 0,
            },
            {
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: slot,
                containerAnimation: tween,
                start: 'left 105%',
                end: 'left 62%',
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );

          // the photo slides inside its frame
          gsap.fromTo(
            card.querySelector('.city-parallax'),
            { xPercent: -9 },
            {
              xPercent: 9,
              ease: 'none',
              scrollTrigger: {
                trigger: slot,
                containerAnimation: tween,
                start: 'left 100%',
                end: 'right 0%',
                scrub: true,
              },
            }
          );

          // the card in the middle of the screen opens up
          ScrollTrigger.create({
            trigger: slot,
            containerAnimation: tween,
            start: 'left 62%',
            end: 'right 38%',
            onToggle: (self) => card.classList.toggle('is-focus', self.isActive),
          });
        });
      } else {
        /* =============== PHONES: normal vertical scroll =============== */
        slots.forEach((slot) => {
          gsap.from(slot, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: slot, start: 'top 88%', toggleActions: 'play none none reverse' },
          });
        });
      }
    });

    return () => (
      <section class="country-central" ref={rootRef} id="country-cities">
        <span class="central-ghost" ref={ghostRef} aria-hidden="true">{c.name}</span>

        <div class="central-intro" ref={introRef}>
          <p class="central-count">{cities.length} cities</p>
          <h2 ref={headRef}>{section.heading || `Top cities in ${c.name}`}</h2>
          <p class="central-body" ref={bodyRef}>{section.body}</p>
        </div>

        <div class="city-row">
          {cities.map((city, i) => (
            <div
              key={city.id}
              class={['city-slot flex-none', i % 2 ? 'md:translate-y-10' : 'md:-translate-y-8']}
            >
              <article
                class="city-card group relative isolate flex h-[min(68vh,580px)] w-[clamp(260px,23vw,350px)] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] max-md:h-[460px] max-md:w-full"
                onPointermove={onMove}
                onPointerleave={onLeave}
              >
                {/* photo, 125% wide so it can slide inside the frame */}
                <div class="city-parallax absolute inset-y-0 -left-[12.5%] w-[125%]">
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src={asset(city.images.primary)}
                    alt={city.name}
                    loading="lazy"
                    draggable="false"
                  />
                  <img
                    class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    src={asset(city.images.hover)}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/5" />
                <div class="city-dim pointer-events-none absolute inset-0 bg-[#17110e]/55" />
                <span class="city-shine" />

                <span class="absolute right-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
                  {city.suggestedStay}
                </span>

                <div class="relative m-3 rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <h3 class="text-3xl font-semibold leading-none tracking-tight">{city.name}</h3>
                  <p class="mt-2 line-clamp-2 text-sm text-white/75">{city.knownFor}</p>

                  <div class="city-more">
                    <div>
                      <p class="mt-3 text-sm leading-relaxed text-white/80">{city.intro}</p>
                      <p class="mt-3 text-xs leading-relaxed text-white/60">
                        <span class="text-[var(--accent)]">Best time: </span>
                        {city.bestTime}
                      </p>
                      {/* hook the city page up here later: router.push(city.route) */}
                      <button
                        type="button"
                        class="mt-4 w-full rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[#17110e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Discover {city.name}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
