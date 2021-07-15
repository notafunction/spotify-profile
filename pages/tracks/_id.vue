<template>
  <pre>{{ track }}</pre>
</template>

<script>
export default {
  data() {
    return {
      track: {},
    }
  },

  async fetch() {
    this.track = await this.$axios.$get(
      `https://api.spotify.com/v1/tracks/${this.$route.params.id}`
    )
  },
}
</script>

<style></style>
