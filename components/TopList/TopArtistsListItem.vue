<template>
  <li class="group">
    <nuxt-link :to="`/artist/${artist.id}`" class="flex items-center block">
      <div class="h-16 w-16 mr-6 rounded-full overflow-hidden flex-shrink-0">
        <img :srcset="imageSrcset" :sizes="imageSizes" :src="artist.images[0].src" :alt="artist.name" />
      </div>
      <span class="
        block 
        border-transparent border-solid border-b
        group-hover:border-white transition-colors
        overflow-ellipsis overflow-hidden whitespace-nowrap
      ">{{ artist.name }}</span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true,
    }
  },

  computed: {
    imageSrcset() {
      return this.artist.images.map((image) => `${image.url} ${image.width}w`).join(',')
    },

    imageSizes() {
      return '64px'
    }
  }
}
</script>