<template>
  <div>
    <ListContainer title="Top Artists" grid>
      <template #action>
        <TimeRangeFilter
          class="mt-4"
          :current-range="range"
          @change-range="handleRangeChange"
        />
      </template>

      <ArtistItem
        v-for="artist in artists"
        :key="artist.id"
        :artist="artist"
        large
      />
    </ListContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: 'long_term',
      artists: [],
    }
  },

  async fetch() {
    const { items } = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/me/top/artists`,
      {
        params: {
          time_range: this.range,
        },
      }
    )
    this.artists = items
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
