<template>
  <div>
    <ListContainer title="Top Artists" grid>
      <template #action>
        <TimeRangeFilter
          :current-range="range"
          @change-range="handleRangeChange"
        />
      </template>

      <ArtistItem
        v-for="artist in artists.items"
        :key="artist.id"
        :artist="artist"
        large
      />
    </ListContainer>
    <client-only>
      <infinite-loading
        v-if="!$fetchState.pending"
        :identifier="infiniteId"
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
      artists: {},
      infiniteId: +new Date(),
    }
  },

  async fetch() {
    const artists = await this.$api.spotify.getUserTopArtistsWithRange(
      this.range
    )
    this.artists = artists
  },

  watch: {
    async range() {
      await this.$fetch()
      this.infiniteId++
    },
  },

  methods: {
    handleRangeChange(newRange) {
      this.range = newRange
    },

    async handleInfinite($state) {
      if (!this.artists.next) return $state.complete()

      const { items, ...paginationProps } = await this.$axios.$get(
        this.artists.next
      )

      this.artists = {
        ...paginationProps,
        items: this.artists.items.concat(items),
      }

      $state.loaded()
    },
  },
}
</script>

<style></style>
