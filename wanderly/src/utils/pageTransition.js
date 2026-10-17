import { gsap, ScrollTrigger } from './gsap.js';
import landing from '../data/landing.json';
import './pageTransition.css';

/*
  Page curtain
    A dark panel wipes up over the old page, the route changes while it is fully
    covered, then it lifts away from the new page. The panel shows the name of
    where you are going ("India", "Wanderly"). It is built with plain DOM, so
    App.jsx does not need to change.

  Used by the router:
    beforeEach -> await coverPage(to)    (old page stays on screen until covered)
    afterEach  -> revealPage(to)         (lifts once the new page says it is ready)

  A country page announces it is ready with:  window.dispatchEvent(new Event('wanderly:page-ready'))
*/
const REDUCE = '(prefers-reduced-motion: reduce)';
const READY_EVENT = 'wanderly:page-ready';

let curtain = null;
let label = null;
let line = null;
let state = 'idle'; // idle | covering | covered | revealing
let coverPromise = null;
let activeTl = null;
let revealToken = 0;

const labelFor = (to) => {
  if (to.params?.city) {
    // "san-francisco" -> "San Francisco"
    return to.params.city
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
  return landing.countries.find((c) => c.id === to.params?.id)?.heading ?? 'Wanderly';
};

const ensure = () => {
  if (curtain) return;
  curtain = document.createElement('div');
  curtain.className = 'page-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  curtain.innerHTML =
    '<div class="page-curtain-label"><span></span></div><i class="page-curtain-line"></i>';
  document.body.appendChild(curtain);
  label = curtain.querySelector('.page-curtain-label span');
  line = curtain.querySelector('.page-curtain-line');
  gsap.set(curtain, { yPercent: 100, visibility: 'hidden' });
};

export function coverPage(to) {
  if (window.matchMedia(REDUCE).matches) return Promise.resolve();
  ensure();

  // already covered: just change the name and cancel any lift that was waiting
  if (state === 'covered') {
    revealToken++;
    label.textContent = labelFor(to);
    return Promise.resolve();
  }
  if (state === 'covering') return coverPromise;

  const wasRevealing = state === 'revealing';
  activeTl?.kill();
  state = 'covering';
  label.textContent = labelFor(to);
  curtain.style.pointerEvents = 'auto'; // block clicks while it moves
  if (!wasRevealing) gsap.set(curtain, { yPercent: 100, visibility: 'visible' });
  gsap.set(label, { yPercent: 110 });
  gsap.set(line, { scaleX: 0 });

  coverPromise = new Promise((resolve) => {
    activeTl = gsap
      .timeline({
        onComplete: () => {
          state = 'covered';
          resolve();
        },
      })
      .to(curtain, { yPercent: 0, duration: 0.75, ease: 'power4.inOut' })
      .to(label, { yPercent: 0, duration: 0.6, ease: 'power3.out' }, 0.45)
      .to(line, { scaleX: 1, duration: 0.6, ease: 'power3.inOut' }, 0.55);
  });
  return coverPromise;
}

// Waits for the new page to announce itself, but never longer than the timeout
const waitForPage = (isCountry) =>
  new Promise((resolve) => {
    const done = () => {
      clearTimeout(timer);
      window.removeEventListener(READY_EVENT, done);
      resolve();
    };
    const timer = setTimeout(done, isCountry ? 2500 : 450);
    window.addEventListener(READY_EVENT, done);
  });

const lift = () => {
  if (state === 'revealing' || state === 'idle') return;
  state = 'revealing';
  activeTl?.kill();
  activeTl = gsap
    .timeline({
      onComplete: () => {
        gsap.set(curtain, { yPercent: 100, visibility: 'hidden' });
        curtain.style.pointerEvents = 'none';
        state = 'idle';
        try {
          ScrollTrigger.refresh();
        } catch (err) {
          console.warn('[pageTransition] refresh failed', err);
        }
      },
    })
    .to(label, { yPercent: -110, duration: 0.45, ease: 'power3.in' })
    .to(line, { scaleX: 0, duration: 0.4, ease: 'power2.in' }, 0)
    .to(curtain, { yPercent: -100, duration: 0.85, ease: 'power4.inOut' }, 0.2);
};

export async function revealPage(to) {
  if (state !== 'covered') return;
  const token = revealToken;

  // failsafe: whatever goes wrong below, the curtain never stays down
  const failsafe = setTimeout(() => {
    if (token === revealToken && state === 'covered') lift();
  }, 5000);

  try {
    await waitForPage(to.name === 'CountryPage' || to.name === 'CityPage');
    if (token !== revealToken || state !== 'covered') return;

    // measure every ScrollTrigger of the new page again before showing it
    ScrollTrigger.refresh();
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    if (token !== revealToken || state !== 'covered') return;
  } catch (err) {
    console.warn('[pageTransition] could not prepare the new page', err);
  } finally {
    clearTimeout(failsafe);
  }

  if (token === revealToken) lift();
}
