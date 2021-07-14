<template>
  <li class="artist-list-item">
    <nuxt-link :to="`/artist/${artist.id}`">
      <div class="artist-list-item__image">
        <img :src="artist.images[0].url" />
      </div>
      <span>{{ artist.name }}</span>
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
  }
}
</script>

<style lang="scss" scoped>
.artist-list-item {
  a {
    display: flex;
    align-items: center;
  }

  &__image {
    @apply h-16 w-16 mr-6 rounded-full;
    overflow: hidden;
  }
}
</style>