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
        v-for="track in tracks.items"
        :key="track.id"
        :track="track"
        class="my-6 w-auto"
      />
    </ListContainer>
    <client-only>
      <infinite-loading
        v-if="!$fetchState.pending"
        :identifier="infiniteIdentifier"
        @infinite="handleInfinite"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: 'long_term',
      tracks: {},
      infiniteIdentifier: +new Date(),
    }
  },

  async fetch() {
    const tracks = await this.$api.spotify.getUserTopTracksWithRange(this.range)

    this.tracks = tracks
  },

  watch: {
    async range() {
      await this.$fetch()
      this.infiniteIdentifier++
    },
  },

  methods: {
    handleRangeChange(newRange) {
      this.range = newRange
    },

    async handleInfinite($state) {
      if (!this.tracks.next) return $state.complete()

      const { items, ...paginationProps } = await this.$axios.$get(
        this.tracks.next
      )

      this.tracks = {
        ...paginationProps,
        items: this.tracks.items.concat(items),
      }

      $state.loaded()
    },
  },
}
</script>

<style></style>
