<template>
  <div>
    <ListContainer title="Recently Played Songs">
      <TrackItem
        v-for="(recent, index) in recents"
        :key="index"
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
      // polling: null,
    }
  },

  async fetch() {
    const { items } = await this.$api.spotify.getUserRecentlyPlayed()
    this.recents = items
  },
}
</script>

<style></style>
