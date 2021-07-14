<template>
  <main id="site-container" :class="{ isMobile, isNavigationOpen }">
    <NavigationToggle v-if="isMobile" :is-open="isNavigationOpen" @toggle="handleNavigationToggle" />
    <SlideXLeftTransition>
      <Navigation v-if="navigationIsShown" />
    </SlideXLeftTransition>
    <div id="page-container">
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
    }
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
      this.isMobile = window.innerWidth < 700
    },

    handleNavigationToggle() {
      this.isNavigationOpen = !this.isNavigationOpen
    }
  }
}
</script>

<style lang="scss">
html, body, #__nuxt, #__layout, #site-container {
    height: 100%;
    width: 100%;
    font-family: Circular;
}

body {
    @apply bg-gray-900 text-gray-50;
}

#site-container {
  display: flex;

  .isNavigationOpen & {
    overflow: hidden;
  }
}

#page-container {
  flex: 1;
  overflow-y: auto;
  @apply p-12;

  .isMobile & {
    @apply p-6;
  }
}
</style>