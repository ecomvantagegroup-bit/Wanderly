import { defineComponent, inject, ref } from 'vue';
import { gsap, SplitText } from '../../../utils/gsap.js';
import { asset } from '../../../utils/router.jsx';
import './CityCentral.css';

export default defineComponent({
  name: 'CityCentral',
  props: { city: { type: Object, required: true } },

  setup(props) {
    const c = props.city;
    const scroll = inject('cityScroll');
    const sheet = inject('citySheet');

    const places = c.places || [];
    const unescoCount = places.filter((p) => p.unesco).length;
    const q = c.quickFacts || {};
    const rest = (c.overview || []).slice(1); // the first paragraph already sits in the hero

    const rootRef = ref(null);
    const introRef = ref(null);
    const headRef = ref(null);

    // the card grows into the place sheet from its photo
    const openPlace = (e, id) => {
      sheet.open(id, e.currentTarget.querySelector('.place-frame'));
    };

    scroll.onReady(({ tween, desktop, reduce }) => {
      const root = rootRef.value;
      if (!root || reduce) return;
      const cards = gsap.utils.toArray('.place-card', root);

      /* =============== DESKTOP: follows the horizontal scroll =============== */
      if (desktop && tween) {
        const head = SplitText.create(headRef.value, { type: 'words', mask: 'words' });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: introRef.value,
              containerAnimation: tween,
              start: 'left 85%',
              toggleActions: 'play none none reverse',
            },
          })
          .from(head.words, { yPercent: 110, duration: 0.9, ease: 'power3.out', stagger: 0.08 })
          .from(
            introRef.value.querySelectorAll('[data-fade]'),
            { opacity: 0, y: 14, duration: 0.7, ease: 'power2.out', stagger: 0.08 },
            '-=0.5'
          );

        cards.forEach((card) => {
          const frame = card.querySelector('.place-frame');
          const parallax = card.querySelector('.place-parallax');
          const cap = card.querySelector('.place-cap');
          const trig = { trigger: card, containerAnimation: tween, scrub: true };

          // each photo is drawn open from the bottom as it arrives
          gsap.fromTo(
            frame,
            { clipPath: 'inset(100% 0% 0% 0% round 4px)' },
            { clipPath: 'inset(0% 0% 0% 0% round 4px)', ease: 'none', scrollTrigger: { ...trig, start: 'left 100%', end: 'left 72%' } }
          );

          // the picture slides inside its frame
          gsap.fromTo(
            parallax,
            { xPercent: -8 },
            { xPercent: 8, ease: 'none', scrollTrigger: { ...trig, start: 'left 100%', end: 'right 0%' } }
          );

          gsap.fromTo(
            cap,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, ease: 'none', scrollTrigger: { ...trig, start: 'left 92%', end: 'left 70%' } }
          );
        });
      } else {
        /* =============== PHONES: normal vertical scroll =============== */
        cards.forEach((card) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
          });
        });
      }
    });

    return () => (
      <section class="city-central" ref={rootRef} id="city-places">
        <div class="ccentral-intro" ref={introRef}>
          <div class="ccentral-col">
            <h2 ref={headRef}>Places to see in {c.name}</h2>
            <p class="ccentral-count" data-fade>
              {places.length} places
              {unescoCount > 0 ? `, ${unescoCount} of them UNESCO World Heritage Sites.` : '.'} Choose one to read more.
            </p>
            <dl class="ccentral-facts" data-fade>
              {q.bestTime && (
                <div>
                  <dt>Best time</dt>
                  <dd>{q.bestTime}</dd>
                </div>
              )}
              {q.suggestedStay && (
                <div>
                  <dt>Suggested stay</dt>
                  <dd>{q.suggestedStay}</dd>
                </div>
              )}
            </dl>
          </div>

          {rest.length > 0 && (
            <div class="ccentral-col ccentral-text">
              {rest.map((para, i) => (
                <p key={i} data-fade>{para}</p>
              ))}
            </div>
          )}
        </div>

        <ul class="place-row">
          {places.map((p) => (
            <li key={p.id} class="place-card" data-id={p.id}>
              <button
                type="button"
                class="place-open"
                aria-label={`Read about ${p.name}`}
                onClick={(e) => openPlace(e, p.id)}
              >
                <span class="place-frame">
                  <span class="place-parallax">
                    <img class="place-img" src={asset(p.images.primary)} alt="" loading="lazy" draggable="false" />
                    <img class="place-img place-img-alt" src={asset(p.images.hover)} alt="" aria-hidden="true" loading="lazy" draggable="false" />
                  </span>
                  {p.unesco && <span class="place-badge">UNESCO</span>}
                  <span class="place-plus" aria-hidden="true" />
                </span>
                <span class="place-cap">
                  <span class="place-name">{p.name}</span>
                  <span class="place-cat">{p.category}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  },
});
