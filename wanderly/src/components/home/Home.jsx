import { defineComponent } from 'vue'
import SectionStack from '../SectionStack/SectionStack.jsx'
import HeroSection from './Hero/HeroSection.jsx'
import CentralSection from './CentralSection/CentralSection.jsx'
import StorySection from './Story/Story.jsx'
import FooterSection from './Footer/Footer.jsx'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <main class="min-h-screen">
        <SectionStack>
          <HeroSection />
          <CentralSection />
          <StorySection />
          <FooterSection />
        </SectionStack>
      </main>
    )
  },
})
