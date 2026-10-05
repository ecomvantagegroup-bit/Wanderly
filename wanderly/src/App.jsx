import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <main class="min-h-screen">
        <h1 class="p-8 text-3xl font-medium">Wanderly</h1>
      </main>
    )
  },
})
