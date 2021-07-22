<template>
  <div>
    <ListContainer title="Your Playlists" grid>
      <PlaylistItem
        v-for="playlist in playlistsWithTracks"
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

  computed: {
    playlistsWithTracks() {
      if (!this.playlists.length) return []

      return this.playlists.filter((playlist) => playlist.tracks.total > 0)
    },
  },
}
</script>

<style></style>
