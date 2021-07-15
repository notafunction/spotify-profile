<template>
  <div>
    <ListContainer title="Your Playlists" grid>
      <PlaylistItem
        v-for="playlist in playlists"
        :key="playlist.id"
        :playlist="playlist"
        large
      />
    </ListContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists: [],
    }
  },

  async fetch() {
    const { items } = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/me/playlists`
    )
    this.playlists = items
  },
}
</script>

<style></style>
