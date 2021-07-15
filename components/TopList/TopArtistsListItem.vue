<template>
  <li>
    <nuxt-link
      :to="`/artists/${artist.id}`"
      class="group inline-flex items-center"
    >
      <div class="h-16 w-16 mr-6 rounded-full overflow-hidden flex-shrink-0">
        <SpotifyImg :images="artist.images" :alt="artist.name" />
      </div>
      <span
        class="
          block
          border-transparent border-solid border-b
          group-hover:border-white
          transition-colors
          overflow-ellipsis overflow-hidden
          whitespace-nowrap
        "
        >{{ artist.name }}</span
      >
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },

  computed: {
    imageSrcset() {
      return this.artist.images
        .map((image) => `${image.url} ${image.width}w`)
        .join(',')
    },

    imageSizes() {
      return '64px'
    },
  },
}
</script>
