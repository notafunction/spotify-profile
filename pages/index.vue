<template>
  <div>
    <UserHeader />
    <div class="flex flex-col md:flex-row pt-12 -my-6 md:-mx-4 md:my-0">
      <div class="flex-1 my-6 md:mx-4 md:my-0">
        <ListContainer title="Top Artists of All Time">
          <template #action>
            <nuxt-link
              to="/artists"
              class="
                border-b border-transparent border-solid
                hover:border-white
              "
            >
              View All
            </nuxt-link>
          </template>

          <ArtistItem
            v-for="(artist, index) in artists.items"
            :key="artist.id"
            :artist="artist"
            class="my-4 flex"
            :tabindex="index"
          />
        </ListContainer>
        <client-only>
          <infinite-loading
            v-if="!$fetchState.pending"
            @infinite="handleInfiniteArtists"
          />
        </client-only>
      </div>
      <div class="flex-1 my-6 md:mx-4 md:my-0">
        <ListContainer title="Top Tracks of All Time">
          <template #action>
            <nuxt-link
              to="/tracks"
              class="
                border-b border-transparent border-solid
                hover:border-white
              "
            >
              View All
            </nuxt-link>
          </template>

          <TrackItem
            v-for="track in tracks.items"
            :key="track.id"
            :track="track"
            class="my-4"
          />
        </ListContainer>
        <client-only>
          <infinite-loading
            v-if="!$fetchState.pending"
            @infinite="handleInfiniteTracks"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artists: {},
      tracks: {},
    }
  },

  async fetch() {
    const [artists, tracks] = await Promise.all([
      this.$api.spotify.getUserTopArtistsWithRange(),
      this.$api.spotify.getUserTopTracksWithRange(),
    ])

    this.artists = artists
    this.tracks = tracks
  },

  methods: {
    async handleInfiniteArtists($state) {
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

    async handleInfiniteTracks($state) {
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
