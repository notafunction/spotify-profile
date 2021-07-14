<template>
  <nav>
      <nuxt-link to="/">Profile</nuxt-link>
      <nuxt-link to="/artists">Top Artists</nuxt-link>
      <nuxt-link to="/tracks">Top Tracks</nuxt-link>
      <nuxt-link to="/recent">Recent</nuxt-link>
      <nuxt-link to="/playlists">Playlists</nuxt-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @apply p-3;

  a {
    display: block;
    @apply p-3 font-bold text-lg;

    &.nuxt-link-exact-active {
      @apply text-spotify;
    }
  }

  .isMobile & {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    @apply bg-gray-900 p-6;

    a {
      @apply p-3 text-2xl;
    }
  }
}
</style>