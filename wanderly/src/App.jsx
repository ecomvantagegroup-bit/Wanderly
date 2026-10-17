import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { initMusicPlayer } from './utils/musicPlayer.js'


export default defineComponent({
  name: 'App',
  setup() {
    initMusicPlayer()
    return () => <RouterView />
  },
})
