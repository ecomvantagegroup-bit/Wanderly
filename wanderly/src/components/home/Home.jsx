import { defineComponent } from 'vue'
import HorizontalStack from './HorizontalStack/HorizontalStack.jsx'
import HeroSection from './Hero/HeroSection.jsx'
import CentralSection from './CentralSection/CentralSection.jsx'
import StorySection from './Story/Story.jsx'
import FooterSection from './Footer/Footer.jsx'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <main class="min-h-screen bg-[#0a0b0d]">
        <HorizontalStack labels={['Begin', 'Destinations', 'Story', 'Beyond']}>
          <HeroSection />
          <CentralSection />
          <StorySection />
          <FooterSection />
        </HorizontalStack>
      </main>
    )
  },
})
