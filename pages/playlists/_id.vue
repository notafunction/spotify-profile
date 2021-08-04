<template>
  <div v-if="playlist" class="flex flex-col mx-auto w-full">
    <section class="flex flex-col items-center mb-16">
      <SpotifyImg
        v-if="playlist.images"
        :images="playlist.images"
        :sizes="['400px']"
        :alt="playlist.name"
      />

      <h1 class="text-4xl mt-8">{{ playlist.name }}</h1>
      <h2 class="text-gray-400 my-4">by {{ playlist.owner.display_name }}</h2>
      <h3>
        {{ playlist.tracks.total }}
        {{ playlist.tracks.total === 1 ? 'track' : 'tracks' }}
      </h3>
    </section>

    <section class="flex flex-col md:flex-row -my-6 md:-mx-4 md:my-0 w-full">
      <div class="my-6 md:mx-4 md:my-0 flex-1">
        <ListContainer title="Tracks" small>
          <TrackItem
            v-for="({ track }, index) in playlist.tracks.items"
            :key="index"
            class="my-4"
            :track="track"
          />
        </ListContainer>
        <client-only>
          <infinite-loading
            v-if="!$fetchState.pending"
            @infinite="infiniteHandler"
          />
        </client-only>
      </div>
      <div class="my-6 md:mx-4 md:my-0 flex-1">
        <ListContainer v-if="recommendations" title="Recommended Tracks" small>
          <template #action>
            <button @click="refreshRecommended">
              <img
                src="@/assets/icons/refresh.svg"
                alt="Refresh"
                :class="{
                  'animate-spin': isRefreshing,
                }"
              />
            </button>
          </template>
          <TrackItem
            v-for="track in recommendations.tracks"
            :key="track.id"
            class="my-4"
            :track="track"
          />
        </ListContainer>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlist: null,
      recommendations: null,
      isRefreshing: false,
    }
  },

  async fetch() {
    this.playlist = await this.$api.spotify.getPlaylist(this.$route.params.id)
    this.refreshRecommended()
  },

  methods: {
    async refreshRecommended() {
      this.isRefreshing = true
      this.recommendations = await this.$api.spotify.getRecommendations({
        params: {
          seed_tracks: this.getRecommendationSeedTracks().join(','),
        },
      })

      this.isRefreshing = false
    },

    getRecommendationSeedTracks() {
      return this.playlist.tracks.items
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
        .map(({ track }) => track.id)
    },

    async infiniteHandler($state) {
      const { tracks } = this.playlist
      if (!tracks.next) return $state.complete()
      const { items, ...props } = await this.$axios.$get(tracks.next)
      this.playlist.tracks = {
        ...props,
        items: tracks.items.concat(items),
      }
      $state.loaded()
    },
  },
}
</script>

<style></style>
