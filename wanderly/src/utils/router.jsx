import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import Home from '../components/home/Home.jsx'
import CountryPage from '../components/country_page/CountryPage.jsx'
import CityPage from '../components/city_page/CityPage.jsx'
import { ScrollTrigger } from './gsap.js'
import { coverPage, revealPage } from './pageTransition.js'

// Prefixes public-folder paths with Vite's base ('/wanderly/'); full URLs and data: URIs are left alone
export function asset(p) {
  return p && !/^(https?:)?\/\/|^data:/.test(p)
    ? `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`
    : p
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // /india, /russia, /china, /usa, /japan, /indonesia
      path: '/:id(india|russia|china|usa|japan|indonesia)',
      name: 'CountryPage',
      component: CountryPage
    },
    {
      // /india/delhi, /japan/kyoto ...
      path: '/:id(india|russia|china|usa|japan|indonesia)/:city',
      name: 'CityPage',
      component: CityPage
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

// Page transition: the curtain covers the old page BEFORE the route changes
// (so the old page never jumps), then lifts once the new page is ready.
// The very first page load has no curtain.
router.beforeEach(async (to, from) => {
  if (from === START_LOCATION) return
  await coverPage(to)
  // the curtain hides this: start the next page at the top so its ScrollTriggers
  // are measured at scroll 0, exactly like a fresh reload
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // 'instant' beats any css smooth-scroll
  // ScrollTrigger remembers the last scroll position and can put the next page back there
  ScrollTrigger.clearScrollMemory?.()
})
router.afterEach((to) => {
  revealPage(to)
})

export default router
