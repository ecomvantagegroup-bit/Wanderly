import { gsap } from './gsap.js';

/*
  Background music for the whole site
    - ONE audio element lives at module level, so it keeps playing while the
      router swaps pages (home, country, city). It is never recreated.
    - Browsers block sound until the visitor interacts with the page. So we try
      to start straight away, and if that is blocked we start on the first
      click, tap or key press.
    - A small round button (bottom right) mutes / unmutes. The choice is
      remembered for the next visit.
    - Music pauses while the tab is hidden and resumes when you come back.

  Use (src/main.js):
      import { initMusicPlayer } from './utils/musicPlayer.js';
      initMusicPlayer();

  File: public/assets/bgmusic/bg.mp3
  Move the button with css variables, e.g. :root { --music-right: 1rem; --music-bottom: 5rem; }
*/
const SRC = `${import.meta.env.BASE_URL}assets/bgmusic/bg.mp3`;
const STORAGE_KEY = 'wanderly:music';
const VOLUME = 0.35; // 0 to 1
const FADE = 1.2; // seconds

let audio = null;
let button = null;
let started = false; // has the track ever played
let wantOn = true; // the visitor's choice (true = music on)
let pausedByTab = false;
const fader = { v: 0 }; // gsap animates this, we copy it to audio.volume

const readPref = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'off';
  } catch {
    return true;
  }
};
const savePref = (on) => {
  try {
    localStorage.setItem(STORAGE_KEY, on ? 'on' : 'off');
  } catch {
    /* private mode: the choice just lasts for this visit */
  }
};

const fadeTo = (target, onDone) => {
  gsap.killTweensOf(fader);
  fader.v = audio.volume;
  gsap.to(fader, {
    v: target,
    duration: FADE,
    ease: 'power1.inOut',
    onUpdate: () => {
      audio.volume = Math.min(1, Math.max(0, fader.v));
    },
    onComplete: onDone,
  });
};

const render = () => {
  if (!button) return;
  const playing = !audio.paused && wantOn;
  button.classList.toggle('is-playing', playing);
  button.setAttribute('aria-pressed', String(playing));
  button.setAttribute('aria-label', playing ? 'Mute music' : 'Play music');
  button.title = playing ? 'Mute music' : 'Play music';
};

/* ---------- Start / stop ---------- */
const turnOn = async () => {
  wantOn = true;
  savePref(true);
  try {
    audio.volume = 0;
    await audio.play();
    started = true;
    fadeTo(VOLUME);
  } catch {
    // blocked until the visitor interacts: armGesture() will try again
  }
  render();
};

const turnOff = () => {
  wantOn = false;
  savePref(false);
  fadeTo(0, () => {
    if (!wantOn) audio.pause();
  });
  render();
};

const toggle = () => {
  // wanted but blocked or not started yet: this click is the user gesture, so start
  if (wantOn && audio.paused) turnOn();
  else if (wantOn) turnOff();
  else turnOn();
};

/* ---------- First interaction (autoplay is blocked until then) ---------- */
const armGesture = () => {
  const events = ['pointerdown', 'keydown', 'touchstart'];
  const onGesture = (e) => {
    if (button && button.contains(e.target)) return; // the button has its own click handler
    if (wantOn && audio.paused) turnOn();
    if (!audio.paused) events.forEach((ev) => window.removeEventListener(ev, onGesture, true));
  };
  events.forEach((ev) => window.addEventListener(ev, onGesture, true));
};

/* ---------- Pause in background tabs ---------- */
const onVisibility = () => {
  if (!audio) return;
  if (document.hidden) {
    if (!audio.paused) {
      pausedByTab = true;
      gsap.killTweensOf(fader);
      audio.pause();
    }
  } else if (pausedByTab) {
    pausedByTab = false;
    if (wantOn && started) {
      audio.volume = 0;
      audio.play().then(() => fadeTo(VOLUME)).catch(() => {});
    }
  }
};

/* ---------- The button ---------- */
const CSS = `
.wl-music{position:fixed;right:var(--music-right,1.25rem);bottom:calc(var(--music-bottom,1.25rem) + env(safe-area-inset-bottom,0px));z-index:10000;display:grid;place-items:center;width:2.75rem;height:2.75rem;padding:0;border:1px solid rgba(255,255,255,.35);border-radius:50%;background:rgba(20,18,16,.45);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);color:#fff;cursor:pointer;transition:background .3s,transform .3s}
.wl-music:hover{background:rgba(20,18,16,.72);transform:scale(1.06)}
.wl-music:focus-visible{outline:2px solid #fff;outline-offset:3px}
.wl-bars{display:flex;align-items:flex-end;gap:3px;height:14px}
.wl-bars i{display:block;width:2px;height:100%;border-radius:1px;background:currentColor;transform:scaleY(.3);transform-origin:bottom}
.wl-music.is-playing .wl-bars i{animation:wl-eq 1s ease-in-out infinite}
.wl-music.is-playing .wl-bars i:nth-child(2){animation-delay:-.4s}
.wl-music.is-playing .wl-bars i:nth-child(3){animation-delay:-.75s}
.wl-slash{position:absolute;width:1.5rem;height:2px;border-radius:1px;background:currentColor;transform:rotate(-45deg);opacity:0;transition:opacity .3s}
.wl-music:not(.is-playing) .wl-slash{opacity:1}
@keyframes wl-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@media (prefers-reduced-motion:reduce){.wl-music.is-playing .wl-bars i{animation:none;transform:scaleY(.7)}}
`;

const buildButton = () => {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  button = document.createElement('button');
  button.type = 'button';
  button.className = 'wl-music';
  button.innerHTML = '<span class="wl-bars" aria-hidden="true"><i></i><i></i><i></i></span><span class="wl-slash" aria-hidden="true"></span>';
  button.addEventListener('click', toggle);
  document.body.appendChild(button);
};

/* ---------- Public ---------- */
export function initMusicPlayer() {
  if (audio) return; // already running (also protects against hot reload)

  wantOn = readPref();
  audio = new Audio(SRC);
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0;

  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);
  audio.addEventListener('error', () => {
    console.warn(`[music] could not load ${SRC}. Is it in public/assets/bgmusic/bg.mp3 ?`);
    if (button) button.remove();
  });
  document.addEventListener('visibilitychange', onVisibility);

  buildButton();
  render();

  if (wantOn) {
    turnOn(); // works if the browser allows autoplay, otherwise...
    armGesture(); // ...it starts on the first click, tap or key press
  }
}

export const toggleMusic = () => audio && toggle();
