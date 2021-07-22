<template>
  <li class="flex items-center" :class="{ group: isHovering }">
    <nuxt-link
      :to="`/tracks/${track.id}`"
      class="inline-flex items-center"
      @mouseover.native="isHovering = true"
      @mouseleave.native="isHovering = false"
    >
      <div class="h-16 w-16 overflow-hidden flex-shrink-0">
        <img :src="track.album.images[0].url" />
      </div>
    </nuxt-link>
    <div class="flex-grow ml-6">
      <div class="flex items-center justify-between">
        <nuxt-link
          :to="`/tracks/${track.id}`"
          class="
            border-transparent border-solid border-b
            hover:border-white
            group-hover:border-white
            transition-colors
          "
          >{{ track.name }}</nuxt-link
        >
        <span class="ml-2 text-xs text-gray-400">{{ formattedDuration }}</span>
      </div>
      <span class="block text-sm text-gray-400">
        <span v-for="(artist, index) in track.artists" :key="artist.id">
          <nuxt-link
            class="
              border-transparent border-solid border-b
              hover:border-white
              artist-link
            "
            :to="`/artists/${artist.id}`"
            >{{ artist.name }}</nuxt-link
          >{{ track.artists.length > index + 1 ? ', ' : '' }}
        </span>
        · {{ track.album.name }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isHovering: false,
    }
  },

  computed: {
    formattedDuration() {
      return this.$moment.duration(this.track.duration_ms).format('m:ss')
    },
  },
}
</script>
