<template>
  <div>
    <ListContainer title="Top Tracks">
      <template #action>
        <TimeRangeFilter
          :current-range="range"
          @change-range="handleRangeChange"
        />
      </template>

      <TrackItem
        v-for="track in tracks"
        :key="track.id"
        :track="track"
        class="my-6 w-auto"
      />
    </ListContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: 'long_term',
      tracks: [],
    }
  },

  async fetch() {
    const { items } = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/me/top/tracks`,
      {
        params: {
          time_range: this.range,
        },
      }
    )
    this.tracks = items
  },

  methods: {
    handleRangeChange(newRange) {
      this.range = newRange
      this.$fetch()
    },
  },
}
</script>

<style></style>
