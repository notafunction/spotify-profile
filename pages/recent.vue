<template>
  <div>
    <ListContainer title="Recently Played Songs">
      <TrackItem
        v-for="(recent, index) in recents.items"
        :key="index"
        :track="recent.track"
        class="my-6"
      />
    </ListContainer>
    <client-only>
      <infinite-loading
        v-if="!$fetchState.pending"
        @infinite="handleInfinite"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recents: [],
    }
  },

  async fetch() {
    const recents = await this.$api.spotify.getUserRecentlyPlayed()
    this.recents = recents
  },

  methods: {
    async handleInfinite($state) {
      if (!this.recents.next) return $state.complete()

      const { items, ...paginationProps } = await this.$axios.$get(
        this.recents.next
      )

      this.recents = {
        ...paginationProps,
        items: this.recents.items.concat(items),
      }

      $state.loaded()
    },
  },
}
</script>

<style></style>
