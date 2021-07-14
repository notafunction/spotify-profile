<template>
  <li class="track-list-item">
    <nuxt-link :to="`/track/${track.id}`">
      <div class="track-list-item__image">
        <img :src="track.album.images[0].url" />
      </div>
      <span>{{ track.name }}</span>
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

<style lang="scss" scoped>
.track-list-item {
  a {
    display: flex;
    align-items: center;
  }

  &__image {
    @apply h-16 w-16 mr-6;
    overflow: hidden;
  }
}
</style>