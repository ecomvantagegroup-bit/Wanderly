import { defineComponent, ref, onMounted, onBeforeUnmount, Fragment, Comment } from 'vue';
import { gsap, ScrollTrigger } from '../../../utils/gsap.js';
import './HorizontalStack.css';

/*
  HorizontalStack (replaces SectionStack)
  ---------------------------------------
  >= 768px : the whole page is ONE pinned row. Vertical scroll moves it sideways.
  <  768px : normal vertical page (horizontal scroll is bad on phones).

  Children opt in with data attributes (no GSAP needed inside them):
    data-speed="0.6"  -> horizontal parallax (negative = opposite way, <img> gets a zoom)
    data-reveal       -> fades/rises in when it enters from the right
  RULE: put data-speed only on elements whose PARENT is not moving.
*/

const flatten = (nodes = []) =>
  nodes.flatMap((n) => {
    if (n.type === Comment) return [];
    if (n.type === Fragment) return flatten(n.children);
    return [n];
  });

export default defineComponent({
  name: 'HorizontalStack',
  props: { labels: { type: Array, default: () => [] } },

  setup(props, { slots }) {
    const rootRef = ref(null);
    const trackRef = ref(null);
    const barRef = ref(null);
    const labelRef = ref(null);
    const countRef = ref(null);
    let mm;
    let destroyed = false;

    const build = () => {
      if (destroyed || !rootRef.value) return;
      mm = gsap.matchMedia();

      mm.add({ desk: '(min-width: 768px)', reduce: '(prefers-reduced-motion: reduce)' }, (c) => {
        const { desk, reduce } = c.conditions;
        const track = trackRef.value;
        const panels = gsap.utils.toArray('.h-panel', track);

        /* ---- phone: simple vertical reveals ---- */
        if (!desk) {
          if (reduce) return;
          gsap.utils.toArray('[data-reveal]', track).forEach((el) =>
            gsap.from(el, {
              y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
            })
          );
          return;
        }

        /* ---- desktop: pinned horizontal row ---- */
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
        let current = -1;
        const setLabel = (p) => {
          const x = p * dist() + window.innerWidth * 0.5;
          let idx = 0;
          panels.forEach((el, i) => { if (el.offsetLeft <= x) idx = i; });
          if (idx === current) return;
          current = idx;
          if (labelRef.value) labelRef.value.textContent = props.labels[idx] || '';
          if (countRef.value) countRef.value.textContent =
            `${String(idx + 1).padStart(2, '0')} / ${String(panels.length).padStart(2, '0')}`;
        };

        const h = gsap.to(track, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.value,
            start: 'top top',
            end: () => '+=' + dist(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (barRef.value) barRef.value.style.transform = `scaleX(${self.progress})`;
              setLabel(self.progress);
            },
          },
        });
        setLabel(0);

        if (reduce) return;

        // Parallax: element drifts from +a to -a while it crosses the screen
        gsap.utils.toArray('[data-speed]', track).forEach((el) => {
          const s = parseFloat(el.dataset.speed) || 0.5;
          const a = () => s * window.innerWidth * 0.1;
          const isImg = el.tagName === 'IMG';
          gsap.fromTo(
            el,
            { x: () => a(), ...(isImg && { scale: 1.3 }) },
            {
              x: () => -a(), ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement, containerAnimation: h,
                start: 'left right', end: 'right left', scrub: true, invalidateOnRefresh: true,
              },
            }
          );
        });

        // Reveals
        gsap.utils.toArray('[data-reveal]', track).forEach((el) =>
          gsap.from(el, {
            y: 40, opacity: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, containerAnimation: h, start: 'left 88%', toggleActions: 'play none none reverse' },
          })
        );

        const t = gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
        return () => t.kill();
      }, rootRef.value);
    };

    onMounted(() => (document.fonts?.ready ? document.fonts.ready.then(build) : build()));
    onBeforeUnmount(() => { destroyed = true; mm?.revert(); });

    return () => {
      const kids = flatten(slots.default ? slots.default() : []);
      return (
        <div ref={rootRef} class="hs-root">
          <div ref={trackRef} class="hs-track">
            {kids.map((child, i) => (
              <div key={i} class="h-panel">{child}</div>
            ))}
          </div>
          <div class="hs-hud" aria-hidden="true">
            <span ref={labelRef} class="hs-label" />
            <i class="hs-line"><b ref={barRef} /></i>
            <span ref={countRef} class="hs-count" />
          </div>
        </div>
      );
    };
  },
});
