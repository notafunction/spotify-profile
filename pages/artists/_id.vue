<template>
  <pre>{{ artist }}</pre>
</template>

<script>
export default {
  data() {
    return {
      artist: {},
    }
  },

  async fetch() {
    this.artist = await this.$axios.$get(
      `https://api.spotify.com/v1/artists/${this.$route.params.id}`
    )
  },
}
</script>

<style></style>
