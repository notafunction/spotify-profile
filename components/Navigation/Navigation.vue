<template>
  <nav
    class="p-6 bg-gray-800 flex flex-col justify-center z-40"
    :class="{
      isMobile: device.isMobile,
      isTablet: device.isTablet,
      isDesktop: device.isDesktop,
    }"
  >
    <nuxt-link class="block p-3 text-2xl lg:text-lg font-bold text-lg" to="/"
      >Profile</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl lg:text-lg font-bold text-lg"
      to="/artists"
      >Top Artists</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl lg:text-lg font-bold text-lg"
      to="/tracks"
      >Top Tracks</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl lg:text-lg font-bold text-lg"
      to="/recent"
      >Recent</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl lg:text-lg font-bold text-lg"
      to="/playlists"
      >Playlists</nuxt-link
    >
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['device']),
  },
}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply text-spotify;
}

.isMobile {
  @apply absolute inset-0;
}

.isTablet {
  @apply absolute inset-y-0 right-0;
}

.isDesktop {
  @apply p-3 pr-12;
}
</style>
