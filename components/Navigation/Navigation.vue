<template>
  <nav
    class="
      absolute
      inset-0
      bg-gray-800
      p-6
      md:p-3 md:static md:p-3
      flex flex-col
      justify-center
      md:pr-12
      z-50
    "
  >
    <nuxt-link class="block p-3 text-2xl md:text-lg font-bold text-lg" to="/"
      >Profile</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl md:text-lg font-bold text-lg"
      to="/artists"
      >Top Artists</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl md:text-lg font-bold text-lg"
      to="/tracks"
      >Top Tracks</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl md:text-lg font-bold text-lg"
      to="/recent"
      >Recent</nuxt-link
    >
    <nuxt-link
      class="block p-3 text-2xl md:text-lg font-bold text-lg"
      to="/playlists"
      >Playlists</nuxt-link
    >
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply text-spotify;
}
</style>
