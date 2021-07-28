<template>
  <li>
    <nuxt-link
      :to="`/artists/${artist.id}`"
      class="inline-flex items-center group"
      :class="{
        'flex-col inline-flex justify-center': large,
      }"
    >
      <div
        class="block rounded-full overflow-hidden flex-shrink-0"
        :class="{
          'h-16 w-16 mr-6': !large,
          'h-32 w-32 md:h-48 md:w-48 mb-6 object-cover': large,
        }"
      >
        <SpotifyImg
          :images="artist.images"
          :alt="artist.name"
          class="h-full w-full object-contain"
          :sizes="large ? ['200px'] : ['64px']"
        />
      </div>
      <div
        class="
          block
          border-transparent border-solid border-b
          group-hover:border-white
          hover:border-white
          transition-colors
          overflow-ellipsis overflow-hidden
          whitespace-nowrap
        "
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
