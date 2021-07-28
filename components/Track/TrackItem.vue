<template>
  <li
    class="flex items-center"
    :class="{ group: isHoveringImage }"
    @mouseover="isHoveringElement = true"
    @mouseleave="isHoveringElement = false"
  >
    <nuxt-link :to="`/tracks/${track.id}`" class="inline-flex items-center">
      <div
        class="h-16 w-16 overflow-hidden flex-shrink-0 relative"
        @mouseover="isHoveringImage = true"
        @mouseleave="isHoveringImage = false"
      >
        <TrackAudioPlayer
          v-if="track.preview_url"
          :src="track.preview_url"
          class="absolute h-full w-full"
        />
        <SpotifyImg :images="track.album.images" alt="" :sizes="['64px']" />
      </div>
    </nuxt-link>
    <div class="flex-grow ml-6">
      <div class="flex items-center">
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
        <div v-if="$slots.actions" class="flex items-center mx-4 transition">
          <slot name="actions" v-bind="{ track }" />
        </div>
        <span class="ml-2 text-xs text-gray-400 ml-auto">{{
          formattedDuration
        }}</span>
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
      isHoveringImage: false,
      isHoveringElement: false,
    }
  },

  computed: {
    formattedDuration() {
      return this.$moment.duration(this.track.duration_ms).format('m:ss')
    },
  },
}
</script>
