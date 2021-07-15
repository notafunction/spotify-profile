<template>
  <div>
    <ListContainer title="Recently Played Songs">
      <TrackItem
        v-for="recent in recents"
        :key="recent.track.id"
        :track="recent.track"
        class="my-6"
      />
    </ListContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recents: [],
      polling: null,
    }
  },

  async fetch() {
    const { items } = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/me/player/recently-played`
    )
    this.recents = items
  },

  created() {
    this.polling = setInterval(() => this.$fetch(), 5000)
  },

  beforeDestroy() {
    clearInterval(this.polling)
  },
}
</script>

<style></style>
