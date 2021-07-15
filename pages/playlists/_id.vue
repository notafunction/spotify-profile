<template>
  <pre>
    {{ playlist }}
  </pre>
</template>

<script>
export default {
  data() {
    return {
      playlist: {},
    }
  },

  async fetch() {
    this.playlist = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/playlists/${this.$route.params.id}`
    )
  },
}
</script>

<style></style>
