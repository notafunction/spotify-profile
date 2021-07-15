<template>
  <li class="group">
    <nuxt-link :to="`/track/${track.id}`" class="flex items-center block">
      <div class="h-16 w-16 mr-6 overflow-hidden flex-shrink-0">
        <img :src="track.album.images[0].url" />
      </div>
      <span class="
        block 
        border-transparent border-solid border-b
        group-hover:border-white transition-colors
        overflow-ellipsis overflow-hidden whitespace-nowrap
      ">{{ track.name }}</span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true,
    }
  }
}
</script>