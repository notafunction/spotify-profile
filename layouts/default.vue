<template>
  <main id="site-container" :class="{ isNavigationOpen }">
    <NavigationToggle
      v-if="!device.isDesktop"
      class="absolute top-4 right-4 z-50"
      :is-open="isNavigationOpen"
      @toggle="handleNavigationToggle"
    />
    <component
      :is="device.isTablet ? 'SlideXRightTransition' : 'SlideXLeftTransition'"
    >
      <Navigation
        v-if="device.isDesktop || isNavigationOpen"
        @click.native="handleNavigationToggle"
      />
    </component>
    <div class="flex-1 p-6 md:p-12 overflow-y-auto flex flex-col">
      <Nuxt />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { SlideXLeftTransition, SlideXRightTransition } from 'vue2-transitions'

export default {
  components: {
    SlideXLeftTransition,
    SlideXRightTransition,
  },

  middleware: 'auth',

  data() {
    return {
      isNavigationOpen: false,
    }
  },

  computed: {
    ...mapState(['device']),
  },

  methods: {
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
