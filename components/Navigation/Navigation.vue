<template>
  <nav
    class="
      absolute
      inset-0
      md:inset-auto md:inset-y-0 md:right-0
      bg-gray-800
      p-6
      lg:p-3 lg:p-3
      flex flex-col
      justify-center
      lg:pr-12
      z-40
    "
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
export default {}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply text-spotify;
}
</style>
