<template>
  <li
    class="artist-item"
    :class="{
      group: isHovering,
      large,
    }"
  >
    <nuxt-link
      :to="`/artists/${artist.id}`"
      class="artist-item__image-container"
      @mouseover.native="isHovering = true"
      @mouseleave.native="isHovering = false"
    >
      <SpotifyImg
        :images="artist.images"
        :alt="artist.name"
        class="artist-item__image"
        :sizes="large ? ['200px'] : ['64px']"
      />
    </nuxt-link>
    <nuxt-link
      :to="`/artists/${artist.id}`"
      class="
        block
        border-transparent border-solid border-b
        group-hover:border-white
        hover:border-white
        transition-colors
        overflow-ellipsis overflow-hidden
        whitespace-nowrap
        artist-item__name
      "
      >{{ artist.name }}</nuxt-link
    >
  </li>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true,
    },

    large: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isHovering: false,
    }
  },
}
</script>

<style scoped lang="scss">
.artist-item {
  @apply flex items-center;

  &.large {
    @apply flex-col inline-flex justify-center;
  }

  &__image-container {
    @apply block h-16 w-16 mr-6 rounded-full overflow-hidden flex-shrink-0;

    .large & {
      @apply h-32 w-32 md:h-48 md:w-48 mr-0 mb-6 object-cover;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__name {
    @apply block border-transparent border-solid border-b group-hover:border-white;
    @apply hover:border-white transition-colors overflow-ellipsis overflow-hidden;
    @apply whitespace-nowrap;
  }
}
</style>
