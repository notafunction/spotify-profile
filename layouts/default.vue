<template>
  <main id="site-container" :class="{ isMobile, isNavigationOpen }">
    <NavigationToggle
      v-if="isMobile"
      class="absolute top-4 right-4 z-10"
      :is-open="isNavigationOpen"
      @toggle="handleNavigationToggle"
    />
    <SlideXLeftTransition>
      <Navigation
        v-if="navigationIsShown"
        @click.native="handleNavigationToggle"
      />
    </SlideXLeftTransition>
    <div class="flex-1 p-6 md:p-12 overflow-y-auto">
      <Nuxt />
    </div>
  </main>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'

export default {
  components: {
    SlideXLeftTransition,
  },

  middleware: 'auth',

  data() {
    return {
      isMobile: false,
      isNavigationOpen: false,
    }
  },

  computed: {
    navigationIsShown() {
      if (!this.isMobile) return true
      if (this.isNavigationOpen) return true
      return false
    },
  },

  beforeMount() {
    this.setIsMobile()
    window.addEventListener('resize', this.setIsMobile)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setIsMobile)
  },

  methods: {
    setIsMobile() {
      this.isMobile = window.innerWidth < 768
    },

    handleNavigationToggle() {
      this.isNavigationOpen = !this.isNavigationOpen
    },
  },
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
#site-container {
  height: 100%;
  width: 100%;
  font-family: Circular;
}

body {
  @apply bg-gray-900 text-gray-50;
}

#site-container {
  display: flex;

  &.isNavigationOpen {
    overflow: hidden;
  }
}
</style>
