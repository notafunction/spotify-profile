<template>
  <button class="h-6 w-6 m-3" @click="$emit('toggle')">
    <SlideXLeftTransition>
      <svg-icon
        v-if="isOpen"
        key="close"
        class="absolute top-0 left-0 w-full h-full"
        name="menu-close"
      />
      <svg-icon
        v-else
        key="open"
        class="absolute top-0 left-0 w-full h-full"
        name="menu-open"
      />
    </SlideXLeftTransition>
  </button>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'

export default {
  components: {
    SlideXLeftTransition,
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
