<template>
  <div
    class="
      flex
      cursor-pointer
      opacity-0
      hover:opacity-100
      bg-black bg-opacity-50
      transition
    "
    :class="{
      'opacity-100': isPlaying,
      'bg-opacity-80': isPlaying,
    }"
    @click.prevent="togglePlayer"
  >
    <img
      v-if="isPlaying"
      class="m-auto"
      src="~/assets/icons/pause.svg"
      title="Pause preview"
      alt="Pause preview"
    />
    <img
      v-else
      class="m-auto"
      src="~/assets/icons/play.svg"
      title="Play preview"
      alt="Play preview"
    />
    <audio ref="audioElement" :src="src" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isPlaying: false,
      isLoaded: false,
    }
  },

  created() {
    this.$nuxt.$on('pause', () => {
      this.pause()
    })
  },

  mounted() {
    this.$refs.audioElement.addEventListener(
      'canplaythrough',
      (event) => (this.isLoaded = true)
    )
  },

  beforeDestroy() {
    document.body.removeEventListener('click', this.detectClickOutside)
  },

  methods: {
    togglePlayer() {
      if (this.isPlaying) return this.pause()
      this.play()
    },

    play() {
      this.$refs.audioElement.play()
      this.isPlaying = true

      document.body.addEventListener('click', this.detectClickOutside)
    },

    pause() {
      this.$refs.audioElement.pause()
      this.isPlaying = false

      document.body.removeEventListener('click', this.detectClickOutside)
    },

    detectClickOutside(event) {
      if (!(this.$el === event.target || this.$el.contains(event.target))) {
        this.pause()
      }
    },
  },
}
</script>

<style></style>
