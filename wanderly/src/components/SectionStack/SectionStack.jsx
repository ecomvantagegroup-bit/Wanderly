import { defineComponent, ref, onMounted, onBeforeUnmount, Fragment, Comment } from 'vue';
import { gsap, ScrollTrigger } from '../../utils/gsap.js';
import './SectionStack.css';

/*
  SectionStack
  ------------
  Wrap ANY number of sections in <SectionStack>.

  Tablet / desktop (768px and up), for every pair of neighbouring sections:
    - the active section leaves towards the top-left
    - the next section comes in from the bottom-right, curving up into place
    Scrolling up plays the same path in reverse.

  Phone (below 768px) or "reduce motion": plain vertical scroll, no transform.

  Add a section = add one line in App.jsx. Nothing else to change.
*/

const DESKTOP_MOTION = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';

// Vue can hand us fragments / comments; keep only real section nodes
const flatten = (nodes = []) =>
  nodes.flatMap((n) => {
    if (n.type === Comment) return [];
    if (n.type === Fragment) return flatten(n.children);
    return [n];
  });

export default defineComponent({
  name: 'SectionStack',

  props: {
    enterX: { type: Number, default: 55 }, // vw the next section starts to the right
    exitX: { type: Number, default: -18 }, // vw the active section drifts to the left
    exitY: { type: Number, default: -10 }, // vh extra upward drift of the active section
    tilt: { type: Number, default: 4 }, // degrees of rotation during the move
  },

  setup(props, { slots }) {
    const rootRef = ref(null);
    let mm;
    let destroyed = false;

    const vw = (n) => (window.innerWidth * n) / 100;
    const vh = (n) => (window.innerHeight * n) / 100;

    /*
      A transformed parent breaks "position: fixed" pins inside it (a section that
      pins itself, like CentralSection). So whenever a panel is at its resting state
      we remove the transform completely.
    */
    const clearWhen = (el, restingProgress) => (self) => {
      if (self.progress === restingProgress) gsap.set(el, { clearProps: 'transform' });
    };

    const build = () => {
      if (destroyed || !rootRef.value) return;

      mm = gsap.matchMedia();

      // only runs on tablet / desktop; reverted automatically on phones
      mm.add(
        DESKTOP_MOTION,
        () => {
          const panels = gsap.utils.toArray('.stack-panel', rootRef.value);

          for (let i = 0; i < panels.length - 1; i++) {
            const current = panels[i];
            const next = panels[i + 1];

            const range = {
              scrub: true, // no smoothing, so the resting state is exact
              invalidateOnRefresh: true,
              refreshPriority: -1, // measure after the sections' own pins exist
            };

            /* Active section: leaves to the top-left */
            gsap
              .timeline({
                defaults: { duration: 1, immediateRender: false },
                scrollTrigger: {
                  ...range,
                  trigger: current,
                  start: 'bottom bottom',
                  end: 'bottom top',
                  onLeaveBack: clearWhen(current, 0),
                  onRefresh: clearWhen(current, 0),
                },
              })
              .fromTo(
                current,
                { x: 0 },
                { x: () => vw(props.exitX), ease: 'power2.in', transformOrigin: '0% 0%' },
                0
              )
              .fromTo(
                current,
                { y: 0, rotation: 0, scale: 1, opacity: 1 },
                {
                  y: () => vh(props.exitY),
                  rotation: -props.tilt,
                  scale: 0.92,
                  opacity: 0.35,
                  ease: 'power1.in',
                },
                0
              );

            /* Next section: arrives from the bottom-right and curves up into place.
               It already rises with the page scroll; x eases out fast, so the path
               starts sideways and finishes straight up. */
            gsap
              .timeline({
                defaults: { duration: 1, immediateRender: false },
                scrollTrigger: {
                  ...range,
                  trigger: next,
                  start: 'top bottom',
                  end: 'top top',
                  onLeave: clearWhen(next, 1),
                  onRefresh: clearWhen(next, 1),
                },
              })
              .fromTo(next, { x: () => vw(props.enterX) }, { x: 0, ease: 'power3.out' }, 0)
              .fromTo(
                next,
                { rotation: props.tilt, scale: 0.94, opacity: 0.4 },
                { rotation: 0, scale: 1, opacity: 1, ease: 'power2.out' },
                0
              );
          }

          // pinned children may finish setting up later (fonts / images)
          const refreshCall = gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
          return () => refreshCall.kill();
        },
        rootRef.value
      );
    };

    onMounted(() => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(build);
      } else {
        build();
      }
    });

    onBeforeUnmount(() => {
      destroyed = true;
      if (mm) mm.revert();
    });

    return () => {
      const children = flatten(slots.default ? slots.default() : []);
      return (
        <div ref={rootRef} class="section-stack">
          {children.map((child, i) => (
            <div key={i} class="stack-panel" style={{ zIndex: i + 1 }}>
              {child}
            </div>
          ))}
        </div>
      );
    };
  },
});
