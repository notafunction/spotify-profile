<template>
  <pre>{{ artist }}</pre>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const artist = await $axios.$get(
      `https://api.spotify.com/v1/artists/${params.id}`
    )

    return {
      artist,
    }
  },
}
</script>

<style></style>
