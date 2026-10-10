import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap, ScrollTrigger, SplitText } from '../../../utils/gsap.js';
import './CentralSection.css';
import data from '../../../data/landing.json';

// Phones: do not re-measure every time the browser address bar shows/hides
ScrollTrigger.config({ ignoreMobileResize: true });

/*
  Breakpoint: 768px (keep in sync with the media queries in CentralSection.css)
    >= 768px : pinned section, cards move HORIZONTALLY while you scroll down
    <  768px : normal VERTICAL scroll, cards stacked in a column
*/
const DESKTOP = '(min-width: 768px)';
const MOBILE = '(max-width: 767px)';
const REDUCE = '(prefers-reduced-motion: reduce)';

export default defineComponent({
  name: 'CentralSection',

  setup() {
    const countries = data.countries;
    const sectionRef = ref(null);
    const trackRef = ref(null);
    const active = ref(null); // index of the active card, null = white background

    let mm;
    let clearTimer;
    let destroyed = false;

    /* ---------- Background follows the hovered card (mouse only) ---------- */
    const onEnter = (e, i) => {
      if (e.pointerType !== 'mouse') return;
      clearTimeout(clearTimer);
      active.value = i;
    };

    const onLeaveBg = () => {
      // small delay so moving between two cards does not flash white
      clearTimer = setTimeout(() => {
        active.value = null;
      }, 120);
    };

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
        rotationY: (x - 0.5) * 14,
        rotationX: (0.5 - y) * 14,
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
      onLeaveBg();
    };

    /* ---------- Scroll animation ---------- */
    const getDistance = () =>
      Math.max(0, trackRef.value.scrollWidth - window.innerWidth);

    // Text inside a card: letters rise, words fade up, button fades in
    const buildText = (card, scrollTrigger, playNow) => {
      const title = card.querySelector('h3');
      const body = card.querySelector('p');
      const btn = card.querySelector('.card-btn');

      const splitTitle = SplitText.create(title, { type: 'words,chars' });
      const splitBody = SplitText.create(body, { type: 'words' });

      const tl = gsap.timeline({ paused: playNow, scrollTrigger });

      tl.from(splitTitle.chars, {
        yPercent: 110,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.03,
      })
        .from(
          splitBody.words,
          { y: 12, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.015 },
          '-=0.3'
        )
        .from(btn, { y: 14, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');

      if (playNow) tl.delay(0.4).play();
    };

    const setup = () => {
      if (destroyed || !sectionRef.value) return;

      mm = gsap.matchMedia();

      mm.add(
        { desktop: DESKTOP, mobile: MOBILE, reduce: REDUCE },
        (context) => {
          const { desktop, reduce } = context.conditions;
          const cards = gsap.utils.toArray('.glass-card', sectionRef.value);
          const noHover = window.matchMedia('(hover: none)').matches;

          /* =============== DESKTOP / TABLET: horizontal =============== */
          if (desktop) {
            const hTween = gsap.to(trackRef.value, {
              x: () => -getDistance(),
              ease: 'none',
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top top',
                end: () => '+=' + getDistance(),
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            cards.forEach((card, i) => {
              // touch tablets: the card crossing the middle drives the background
              if (noHover) {
                ScrollTrigger.create({
                  trigger: card,
                  containerAnimation: hTween,
                  start: 'left 55%',
                  end: 'right 45%',
                  onToggle: (self) => {
                    if (self.isActive) active.value = i;
                    else if (active.value === i) active.value = null;
                  },
                });
              }

              if (reduce) return;

              // Curved fly-in: cards 2, 4, 6 from the top-right, 3, 5 from the bottom-right
              if (i > 0) {
                const fromTop = i % 2 === 1;
                gsap.fromTo(
                  card,
                  {
                    y: () => (fromTop ? -1 : 1) * window.innerHeight * 0.7,
                    rotation: fromTop ? -10 : 10,
                    scale: 0.85,
                    opacity: 0,
                  },
                  {
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    ease: 'power3.out',
                    duration: 1,
                    scrollTrigger: {
                      trigger: card,
                      containerAnimation: hTween,
                      start: 'left 100%',
                      end: 'left 35%',
                      scrub: true,
                      invalidateOnRefresh: true,
                    },
                  }
                );
              }

              buildText(
                card,
                i === 0
                  ? null
                  : {
                    trigger: card,
                    containerAnimation: hTween,
                    start: 'left 80%',
                    end: 'right left',
                    toggleActions: 'play none none reverse',
                  },
                i === 0
              );
            });
          }

          /* =============== MOBILE: normal vertical scroll =============== */
          else {
            cards.forEach((card, i) => {
              // the card in the middle of the screen drives the background
              ScrollTrigger.create({
                trigger: card,
                start: 'top 65%',
                end: 'bottom 35%',
                onToggle: (self) => {
                  if (self.isActive) active.value = i;
                  else if (active.value === i) active.value = null;
                },
              });

              if (reduce) return;

              // Cards slide in from the side and rise up, alternating left / right
              const fromLeft = i % 2 === 0;
              gsap
                .timeline({
                  defaults: { duration: 1 },
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 100%',
                    end: 'top 60%',
                    scrub: true, // reverses when scrolling up
                    invalidateOnRefresh: true,
                  },
                })
                .fromTo(
                  card,
                  { x: () => (fromLeft ? -1 : 1) * window.innerWidth * 0.35 },
                  { x: 0, ease: 'power3.out' },
                  0
                )
                .fromTo(
                  card,
                  { y: 80, rotation: fromLeft ? -4 : 4, scale: 0.92, opacity: 0 },
                  { y: 0, rotation: 0, scale: 1, opacity: 1, ease: 'power2.out' },
                  0
                );

              buildText(
                card,
                {
                  trigger: card,
                  start: 'top 75%',
                  toggleActions: 'play none none reverse',
                },
                false
              );
            });
          }

          // runs when the screen size crosses the breakpoint
          return () => {
            active.value = null;
          };
        },
        sectionRef.value
      );

      // Recalculate once images have loaded
      sectionRef.value.querySelectorAll('img').forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
        }
      });
    };

    onMounted(() => {
      // wait for fonts so SplitText measures the final text
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(setup);
      } else {
        setup();
      }
    });

    onBeforeUnmount(() => {
      destroyed = true;
      clearTimeout(clearTimer);
      if (mm) mm.revert();
    });

    return () => (
      <section
        ref={sectionRef}
        class={['central-section', active.value !== null && 'has-bg']}
      >
        {/* Glass frame holding the active card's primary image */}
        <div class="bg-frame" aria-hidden="true">
          <div class="bg-inner">
            {countries.map((country, i) => (
              <img
                key={country.id}
                class={['bg-layer', active.value === i && 'is-active']}
                src={country.images.primary}
                alt=""
              />
            ))}
          </div>
        </div>

        <div ref={trackRef} class="central-track">
          {countries.map((country, i) => (
            <article
              key={country.id}
              class="glass-card"
              onPointerenter={(e) => onEnter(e, i)}
              onPointermove={onMove}
              onPointerleave={onLeave}
            >
              <div class="card-media">
                <img
                  class="card-img img-primary"
                  src={country.images.primary}
                  alt={country.heading}
                  loading="lazy"
                />
                <img
                  class="card-img img-hover"
                  src={country.images.hover}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>{country.heading}</h3>
                <p>{country.body}</p>
                <a href={country.route} class="card-btn">
                  Explore {country.heading}
                </a>
              </div>
              <span class="card-shine" />
            </article>
          ))}
        </div>
      </section>
    );
  },
});
