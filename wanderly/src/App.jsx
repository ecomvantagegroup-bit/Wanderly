import { defineComponent } from 'vue'
import SectionStack from './components/SectionStack/SectionStack.jsx'
import HeroSection from './components/landing_page/Hero/HeroSection.jsx'
import CentralSection from './components/landing_page/CentralSection/CentralSection.jsx'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <main class="min-h-screen">
        <SectionStack>
          <HeroSection />
          <CentralSection />
         
        </SectionStack>
      </main>
    )
  },
})
