<template>
  <pre>{{ track }}</pre>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const track = await $axios.$get(
      `https://api.spotify.com/v1/tracks/${params.id}`
    )

    return {
      track,
    }
  },
}
</script>

<style></style>
