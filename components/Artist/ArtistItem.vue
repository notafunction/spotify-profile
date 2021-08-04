<template>
  <li>
    <nuxt-link
      :to="`/artists/${artist.id}`"
      :class="{
        'artist-item group': true,
        'artist-item--large': large,
      }"
    >
      <div class="artist-item__image">
        <SpotifyImg
          :images="artist.images"
          :alt="artist.name"
          class="h-full w-full object-cover"
          :sizes="large ? ['200px'] : ['64px']"
        />
      </div>
      <div
        class="artist-item__name"
        :class="{
          'whitespace-nowrap': !large,
        }"
      >
        {{ artist.name }}
      </div>
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

<style lang="scss" scoped>
.artist-item {
  $block: &;
  @apply inline-flex items-center group;

  &--large {
    @apply flex-col inline-flex justify-center;
  }

  &__image {
    @apply block rounded-full overflow-hidden flex-shrink-0 h-16 w-16 mr-6;

    #{$block}--large & {
      @apply h-32 w-32 md:h-48 md:w-48 mb-6 mr-0;
    }
  }

  &__name {
    @apply block border-transparent border-solid border-b;
    @apply group-hover:border-white hover:border-white whitespace-nowrap;
    @apply transition-colors overflow-ellipsis overflow-hidden text-center;

    #{$block}--large & {
      @apply whitespace-normal;
    }
  }
}
</style>
