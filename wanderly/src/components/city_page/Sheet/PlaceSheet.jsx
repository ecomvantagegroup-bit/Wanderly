import { defineComponent, ref, computed, nextTick, onBeforeUnmount, Teleport } from 'vue';
import { gsap } from '../../../utils/gsap.js';
import { asset } from '../../../utils/router.jsx';
import './PlaceSheet.css';

/*
  PlaceSheet
    The clicked card's photo grows into a large panel with everything we know about
    the place. It is teleported to <body>, so it is never affected by the sideways
    scroll (a transformed parent would break position: fixed).

    open(id, element)  - element is the card photo the panel grows from
    close()            - shrinks back into the card (or fades if the card is off screen)
    Esc closes, arrow keys move to the previous / next place.
*/
export default defineComponent({
  name: 'PlaceSheet',
  props: { places: { type: Array, required: true } },

  setup(props, { expose }) {
    const rootRef = ref(null);
    const scrimRef = ref(null);
    const panelRef = ref(null);
    const mediaRef = ref(null);
    const imgsRef = ref(null);
    const bodyRef = ref(null);
    const closeRef = ref(null);

    const current = ref(null);
    const alt = ref(false); // showing the second photo
    const isOpen = ref(false);

    let busy = false;
    let lastFocus = null;
    let locked = false;

    const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = (s) => (reduce() ? 0 : s);

    const index = computed(() => props.places.findIndex((p) => p.id === current.value));
    const place = computed(() => props.places[index.value] || null);

    /* ---------- Final size of the panel (and of its two halves) ---------- */
    const geo = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (vw < 768) {
        const mh = Math.round(vh * 0.4);
        return { W: vw, H: vh, left: 0, top: 0, media: { w: vw, h: mh }, body: { left: 0, top: mh, w: vw, h: vh - mh } };
      }
      const W = Math.min(vw * 0.92, 1120);
      const H = Math.min(vh * 0.84, 660);
      const mw = Math.round(W * 0.54);
      return {
        W, H,
        left: (vw - W) / 2,
        top: (vh - H) / 2,
        media: { w: mw, h: H },
        body: { left: mw, top: 0, w: W - mw, h: H },
      };
    };

    /* ---------- Freeze the page behind the panel ---------- */
    const inBody = (e) => e.target.closest && e.target.closest('.sheet-body');
    const onWheel = (e) => {
      if (!inBody(e)) e.preventDefault();
    };
    const onTouch = (e) => {
      if (!inBody(e)) e.preventDefault();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSheet();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      } else if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(e.key)) {
        if (e.key === ' ' && e.target.closest && e.target.closest('button')) return;
        if (!inBody(e)) e.preventDefault();
      }
    };
    const onResize = () => {
      if (!isOpen.value || busy) return;
      const g = geo();
      gsap.set(panelRef.value, { left: g.left, top: g.top, width: g.W, height: g.H });
      gsap.set(mediaRef.value, { width: g.media.w, height: g.media.h });
      gsap.set(bodyRef.value, { left: g.body.left, top: g.body.top, width: g.body.w, height: g.body.h });
    };

    const lock = () => {
      if (locked) return;
      locked = true;
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchmove', onTouch, { passive: false });
      window.addEventListener('keydown', onKey);
      window.addEventListener('resize', onResize);
    };
    const unlock = () => {
      if (!locked) return;
      locked = false;
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };

    /* ---------- Open: the card photo grows into the panel ---------- */
    const openSheet = async (id, fromEl) => {
      if (isOpen.value || busy) return;
      busy = true;
      lastFocus = document.activeElement;
      current.value = id;
      alt.value = false;
      isOpen.value = true;
      await nextTick();

      const root = rootRef.value;
      const panel = panelRef.value;
      const media = mediaRef.value;
      const body = bodyRef.value;
      if (!root || !panel || !media || !body) {
        busy = false;
        return;
      }

      const g = geo();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const r = fromEl
        ? fromEl.getBoundingClientRect()
        : { left: vw / 2 - 100, top: vh / 2 - 100, width: 200, height: 200 };

      lock();
      gsap.set(root, { visibility: 'visible' });
      gsap.set(scrimRef.value, { opacity: 0 });
      gsap.set(panel, { left: r.left, top: r.top, width: r.width, height: r.height, borderRadius: 4, opacity: 1 });
      gsap.set(media, { width: r.width, height: r.height });
      gsap.set(body, { left: g.body.left, top: g.body.top, width: g.body.w, height: g.body.h, opacity: 0 });
      const rise = body.querySelectorAll('[data-rise]');
      gsap.set(rise, { opacity: 0, y: 18 });

      const D = t(0.95);
      gsap
        .timeline({
          onComplete: () => {
            busy = false;
            if (closeRef.value) closeRef.value.focus({ preventScroll: true });
          },
        })
        .to(scrimRef.value, { opacity: 1, duration: t(0.6), ease: 'power2.out' }, 0)
        .to(panel, { left: g.left, top: g.top, width: g.W, height: g.H, borderRadius: 8, duration: D, ease: 'power4.inOut' }, 0)
        .to(media, { width: g.media.w, height: g.media.h, duration: D, ease: 'power4.inOut' }, 0)
        .to(body, { opacity: 1, duration: t(0.4), ease: 'power2.out' }, D * 0.6)
        .to(rise, { opacity: 1, y: 0, duration: t(0.6), ease: 'power3.out', stagger: t(0.07) }, D * 0.65);
    };

    /* ---------- Close: back into the card ---------- */
    const finish = () => {
      gsap.set(rootRef.value, { visibility: 'hidden' });
      gsap.set(panelRef.value, { clearProps: 'all' });
      unlock();
      isOpen.value = false;
      current.value = null;
      busy = false;
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };

    const closeSheet = () => {
      if (!isOpen.value || busy) return;
      busy = true;

      const el = document.querySelector(`.place-card[data-id="${CSS.escape(current.value)}"] .place-frame`);
      const r = el ? el.getBoundingClientRect() : null;
      const visible =
        r && r.width > 0 && r.right > 0 && r.left < window.innerWidth && r.bottom > 0 && r.top < window.innerHeight;

      const tl = gsap.timeline({ onComplete: finish });
      tl.to(bodyRef.value, { opacity: 0, duration: t(0.25), ease: 'power2.in' }, 0);
      if (visible) {
        tl.to(panelRef.value, { left: r.left, top: r.top, width: r.width, height: r.height, borderRadius: 4, duration: t(0.8), ease: 'power4.inOut' }, 0.05)
          .to(mediaRef.value, { width: r.width, height: r.height, duration: t(0.8), ease: 'power4.inOut' }, 0.05)
          .to(scrimRef.value, { opacity: 0, duration: t(0.6), ease: 'power2.in' }, 0.2);
      } else {
        tl.to(panelRef.value, { opacity: 0, duration: t(0.35) }, 0).to(scrimRef.value, { opacity: 0, duration: t(0.35) }, 0);
      }
    };

    /* ---------- Previous / next place without closing ---------- */
    const go = (d) => {
      if (!isOpen.value || busy || props.places.length < 2) return;
      busy = true;
      const n = props.places.length;
      const next = props.places[(index.value + d + n) % n];
      const out = [imgsRef.value, ...bodyRef.value.querySelectorAll('[data-rise]')];

      gsap.to(out, {
        opacity: 0,
        duration: t(0.22),
        ease: 'power2.in',
        onComplete: async () => {
          current.value = next.id;
          alt.value = false;
          await nextTick();
          if (!bodyRef.value) return;
          bodyRef.value.scrollTop = 0;
          const rise = bodyRef.value.querySelectorAll('[data-rise]');
          gsap.fromTo(imgsRef.value, { opacity: 0 }, { opacity: 1, duration: t(0.5), ease: 'power2.out' });
          gsap.fromTo(
            rise,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: t(0.5), ease: 'power3.out', stagger: t(0.06), onComplete: () => { busy = false; } }
          );
        },
      });
    };

    expose({ open: openSheet, close: closeSheet });

    onBeforeUnmount(() => {
      unlock();
      gsap.killTweensOf([rootRef.value, scrimRef.value, panelRef.value, mediaRef.value, bodyRef.value, imgsRef.value]);
    });

    return () => {
      const p = place.value;
      return (
        <Teleport to="body">
          <div class="place-sheet" ref={rootRef} role="dialog" aria-modal="true" aria-label={p ? p.name : 'Place details'}>
            <div class="sheet-scrim" ref={scrimRef} onClick={closeSheet} />

            <div class="sheet-panel" ref={panelRef}>
              <div
                class="sheet-media"
                ref={mediaRef}
                onClick={() => (alt.value = !alt.value)}
                title="Click to see another view"
              >
                <div class="sheet-imgs" ref={imgsRef}>
                  {p && <img class={['sheet-img', !alt.value && 'on']} src={asset(p.images.primary)} alt={p.name} draggable="false" />}
                  {p && <img class={['sheet-img', alt.value && 'on']} src={asset(p.images.hover)} alt="" draggable="false" />}
                </div>
                <span class="sheet-view">{alt.value ? 'First view' : 'Another view'}</span>
              </div>

              <div class="sheet-body" ref={bodyRef}>
                {p && (
                  <>
                    <div class="sheet-meta" data-rise>
                      <span class="sheet-cat">{p.category}</span>
                      {p.unesco && <span class="sheet-unesco">UNESCO World Heritage</span>}
                    </div>
                    <h2 class="sheet-title" data-rise>{p.name}</h2>
                    <p class="sheet-desc" data-rise>{p.description}</p>
                    {p.visitorTip && (
                      <div class="sheet-tip" data-rise>
                        <h3>Visitor tip</h3>
                        <p>{p.visitorTip}</p>
                      </div>
                    )}
                    <div class="sheet-nav" data-rise>
                      <button type="button" class="sheet-step" onClick={() => go(-1)} aria-label="Previous place">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
                      </button>
                      <span class="sheet-count">{index.value + 1} of {props.places.length}</span>
                      <button type="button" class="sheet-step" onClick={() => go(1)} aria-label="Next place">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </>
                )}
              </div>

              <button type="button" class="sheet-close" ref={closeRef} onClick={closeSheet} aria-label="Close">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
          </div>
        </Teleport>
      );
    };
  },
});
