<template>
  <TopListContainer title="Top Artists of All Time">
    <template #action>
      <nuxt-link to="/artists">View All</nuxt-link>
    </template>
    
    <ul>
      <TopArtistsListItem v-for="artist in artists" :key="artist.id" :artist="artist" />
    </ul>

  </TopListContainer>
</template>

<script>
export default {
  data() {
    return {
      artists: [],
    }
  },

  async fetch() {
    const { items } = await this.$axios.$get('https://api.spotify.com/v1/me/top/artists')
    this.artists = items
  }
}
</script>

<style lang="scss" scoped>
</style>