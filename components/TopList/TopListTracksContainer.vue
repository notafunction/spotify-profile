<template>
  <TopListContainer title="Top Tracks of All Time">
    <template #action>
      <nuxt-link to="/tracks">View All</nuxt-link>
    </template>
    
    <ul>
      <TopTracksListItem v-for="track in tracks" :key="track.id" :track="track" />
    </ul>

  </TopListContainer>
</template>

<script>
export default {
  data() {
    return {
      tracks: [],
    }
  },

  async fetch() {
    const { items } = await this.$axios.$get('https://api.spotify.com/v1/me/top/tracks')
    this.tracks = items
  }
}
</script>

<style lang="scss" scoped>
</style>