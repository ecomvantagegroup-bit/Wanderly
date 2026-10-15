/* eslint-disable no-unused-vars */
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap, ScrollTrigger } from '../../../utils/gsap.js';
import data from '../../../data/landing.json';
import { asset } from '../../../utils/router.jsx';
import './Footer.css';



const FADE = 0.7;
const GLOBE_FILL = 0.96;
const PRELOAD_START = 'top 300%';
const TEXT_START = 'top 80%';

export default defineComponent({
  name: 'FooterSection',

  setup() {
    const d = data.footer;
    const bg = d.background;
    const brand = d.content.brand;
    // only the country links have pages so far; the rest keep a plain link
    const countryRoutes = new Set(data.countries.map((c) => c.route));

    const footerRef = ref(null);
    const stageRef = ref(null);
    const canvasRef = ref(null);
    const hintRef = ref(null);

    let ctx = null;
    let destroyed = false;
    let globeStarted = false;
    let three = null; // 3D things we must dispose later
    let globeReady = false;
    let footerInView = false;
    let hintShown = false;

    const prefersReduced = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------- Text ---------------- */
    const revealText = () => {
      if (destroyed) return;
      gsap.to('.footer-reveal', {
        y: 0,
        opacity: 1,
        duration: prefersReduced() ? 0 : 0.9,
        ease: 'power3.out',
        stagger: prefersReduced() ? 0 : 0.08,
      });
    };

    /* ---------------- "Drag to explore" hint (once) ---------------- */
    const tryShowHint = () => {
      if (hintShown || destroyed || !globeReady || !footerInView || !hintRef.value) return;
      hintShown = true;
      gsap
        .timeline()
        .fromTo(
          hintRef.value,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        )
        .to(hintRef.value, { opacity: 0, duration: 0.8, ease: 'power2.in' }, '+=3.5');
    };

    /* ---------------- 3D globe ---------------- */
    const initGlobe = async () => {
      try {
        const THREE = await import('three');
        const [{ GLTFLoader }, { OrbitControls }, { RoomEnvironment }] = await Promise.all([
          import('three/examples/jsm/loaders/GLTFLoader.js'),
          import('three/examples/jsm/controls/OrbitControls.js'),
          import('three/examples/jsm/environments/RoomEnvironment.js'),
        ]);
        if (destroyed || !canvasRef.value) return false;

        const host = canvasRef.value;
        const cfg = bg.interaction || {};

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true, // transparent, so the white footer shows through
          powerPreference: 'high-performance',
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        host.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        // soft studio reflections so the globe does not look flat
        const pmrem = new THREE.PMREMGenerator(renderer);
        scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
        scene.environmentIntensity = 0.9; // reflection strength (ignored by very old three versions)
        renderer.toneMappingExposure = 1.15; // overall brightness

        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
        scene.add(camera);

        // 3-point lighting. All lights ride on the camera, so the globe is lit the same
        // way while orbiting. Their distances are set in fit() so they scale with the model.
        scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2a2430, 0.7)); // sky / ground fill
        const key = new THREE.DirectionalLight(0xfff1dc, 2.6); // warm main light, top right
        const fillLight = new THREE.DirectionalLight(0x9db8ff, 0.9); // cool fill, left
        const rim = new THREE.DirectionalLight(0xffe8c2, 1.6); // soft warm rim from behind
        camera.add(key, fillLight, rim);

        // load and centre the model
        const gltf = await new GLTFLoader().loadAsync(asset(bg.model.path));
        if (destroyed) {
          renderer.dispose();
          return false;
        }
        const model = gltf.scene;
        const sphere = new THREE.Box3().setFromObject(model).getBoundingSphere(new THREE.Sphere());
        model.position.sub(sphere.center);
        scene.add(model);
        const radius = sphere.radius || 1;

        // controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.enablePan = false;
        controls.enableRotate = cfg.rotate !== false;
        controls.autoRotate = !!cfg.autoRotate && !prefersReduced();
        controls.autoRotateSpeed = cfg.autoRotateSpeed ?? 0.5;
        const zoomAllowed = !!cfg.zoom;
        controls.enableZoom = zoomAllowed;
        // let vertical swipes scroll the page on touch screens
        renderer.domElement.style.touchAction = 'pan-y';

        // The wheel scrolls the page. Hold Ctrl (or Cmd) to zoom the globe.
        // Touch: pinch zooms.
        const stage = stageRef.value;
        const onWheel = (e) => {
          controls.enableZoom = zoomAllowed && (e.ctrlKey || e.metaKey);
        };
        const onPointerDown = (e) => {
          if (e.pointerType === 'touch') controls.enableZoom = zoomAllowed;
        };
        stage.addEventListener('wheel', onWheel, { capture: true, passive: true });
        stage.addEventListener('pointerdown', onPointerDown, { capture: true });

        // The stage covers the whole footer: the globe fits the shorter side (height on
        // laptops/TVs, width on vertical phones) and stays centred
        let first = true;
        const fit = () => {
          const w = host.clientWidth || 1;
          const h = host.clientHeight || 1;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
          const fill = GLOBE_FILL * Math.min(1, camera.aspect);
          const dist = radius / (t * fill);
          if (first) {
            camera.position.set(0, 0.18, 1).setLength(dist);
            first = false;
          } else {
            camera.position.setLength(dist);
          }
          controls.minDistance = dist * 0.55;
          controls.maxDistance = dist * 1.5;
          // lights placed relative to the camera distance (x right, y up, +z = towards the viewer, -z = behind the globe)
          key.position.set(0.7, 0.6, 0.5).multiplyScalar(dist);
          fillLight.position.set(-0.8, -0.1, 0.4).multiplyScalar(dist);
          rim.position.set(-0.6, 0.7, -1.6).multiplyScalar(dist);
          camera.near = dist / 50;
          camera.far = dist * 20;
          camera.updateProjectionMatrix();
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(host);

        // render only while the footer is on screen (saves battery)
        const render = () => {
          controls.update();
          renderer.render(scene, camera);
        };
        const io = new IntersectionObserver(([entry]) => {
          renderer.setAnimationLoop(entry.isIntersecting ? render : null);
        });
        io.observe(stage);
        renderer.setAnimationLoop(render);

        three = {
          dispose: () => {
            renderer.setAnimationLoop(null);
            io.disconnect();
            ro.disconnect();
            stage.removeEventListener('wheel', onWheel, { capture: true });
            stage.removeEventListener('pointerdown', onPointerDown, { capture: true });
            controls.dispose();
            scene.traverse((o) => {
              if (o.geometry) o.geometry.dispose();
              if (o.material) {
                const mats = Array.isArray(o.material) ? o.material : [o.material];
                mats.forEach((m) => {
                  Object.values(m).forEach((v) => v && v.isTexture && v.dispose());
                  m.dispose();
                });
              }
            });
            if (scene.environment) scene.environment.dispose();
            pmrem.dispose();
            renderer.dispose();
            renderer.domElement.remove();
          },
        };
        return true;
      } catch (err) {
        console.warn('[Footer] 3D globe could not start, using fallback image.', err);
        return false;
      }
    };

    const revealGlobe = (ok) => {
      const canvas = canvasRef.value;
      const stage = stageRef.value;
      if (destroyed || !canvas || !stage) return;

      if (!ok) {
        // Only now does the fallback image start loading
        stage.style.backgroundImage = `url(${asset(bg.fallbackImage)})`;
        return;
      }

      gsap.to(canvas, {
        opacity: 1,
        duration: prefersReduced() ? 0 : FADE,
        ease: 'power2.inOut',
        onComplete: () => {
          canvas.style.pointerEvents = 'auto'; // the globe can now be dragged
        },
      });
      globeReady = true;
      tryShowHint();
    };

    const loadGlobe = async () => {
      if (globeStarted || destroyed) return;
      globeStarted = true;
      const ok = await initGlobe();
      revealGlobe(ok);
    };

    /* ---------------- Mount / unmount ---------------- */
    onMounted(async () => {
      await document.fonts.ready;
      if (destroyed || !footerRef.value) return;

      ctx = gsap.context(() => {
        // the text stays hidden until the footer comes into view
        gsap.set('.footer-reveal', { y: 24, opacity: 0 });

        // load the globe a few screens before the footer
        ScrollTrigger.create({
          trigger: footerRef.value,
          start: PRELOAD_START,
          once: true,
          onEnter: loadGlobe,
        });

        // animate the text when the footer is coming into view
        ScrollTrigger.create({
          trigger: footerRef.value,
          start: TEXT_START,
          once: true,
          onEnter: () => {
            loadGlobe(); // in case the visitor jumped straight to the footer
            revealText();
          },
        });

        // the hint is shown once the visitor really reaches the footer
        ScrollTrigger.create({
          trigger: footerRef.value,
          start: 'top 70%',
          once: true,
          onEnter: () => {
            footerInView = true;
            tryShowHint();
          },
        });
      }, footerRef.value);
    });

    onBeforeUnmount(() => {
      destroyed = true;
      ctx?.revert();
      if (three) three.dispose();
    });

    return () => (
      <footer class="footer" ref={footerRef}>
        <div class="footer-frame">
          {/* Full-size stage: fallback image and globe both cover the whole footer */}
          <div id="footer-globe" ref={stageRef}>
            <div id="footer-canvas" ref={canvasRef} />
          </div>

          <div id="footer-content">
            <div id="footer-top">
              <div id="footer-logo" class="footer-reveal">
                <img src={asset(brand.logo)} alt="" />
                <span>{brand.name}</span>
              </div>
              <p class="footer-tagline footer-reveal">{brand.tagline}</p>
              <p id="footer-hint" ref={hintRef}>
                Drag to explore
              </p>
            </div>

            <div id="footer-bottom">
              <nav class="footer-links" aria-label="Footer">
                {d.content.columns.map((col) => (
                  <div key={col.title} class="footer-col footer-reveal">
                    <h4>{col.title}</h4>
                    <ul>
                      {col.links.map((link) => (
                        <li key={link.route}>
                          {countryRoutes.has(link.route) ? (
                            <RouterLink to={link.route}>{link.label}</RouterLink>
                          ) : (
                            <a href={link.route}>{link.label}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              <div class="footer-bar footer-reveal">
                <div class="footer-social">
                  {d.content.social.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                    >
                      <img src={asset(s.icon)} alt="" />
                    </a>
                  ))}
                </div>
                <p class="footer-copy">{d.content.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  },
});
