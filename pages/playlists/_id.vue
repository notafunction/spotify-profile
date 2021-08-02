<template>
  <div v-if="playlist" class="flex flex-col mx-auto w-full">
    <section class="flex flex-col items-center mb-16">
      <SpotifyImg
        v-if="playlist.images.length"
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
      <ListContainer title="Tracks" small class="my-6 md:mx-4 md:my-0 flex-1">
        <TrackItem
          v-for="{ track } in playlist.tracks.items"
          :key="track.id"
          class="my-4"
          :track="track"
        />
      </ListContainer>
      <ListContainer
        title="Recommended Tracks"
        small
        class="my-6 md:mx-4 md:my-0 flex-1"
      >
        <template #action>
          <button @click="getRecommendedTracks">
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
          v-for="track in recommendations"
          :key="track.id"
          class="my-4"
          :track="track"
        >
          <template #actions>
            <button class="h-4 w-4" @click="addTrackToPlaylist(track)">
              <img
                src="@/assets/icons/plus.svg"
                title="Add to playlist"
                alt="Add to playlist"
              />
            </button>
          </template>
        </TrackItem>
      </ListContainer>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlist: null,
      recommendations: [],
      isRefreshing: false,
    }
  },

  async fetch() {
    await this.getPlaylist()
    this.getRecommendedTracks()
  },

  methods: {
    async getPlaylist() {
      this.playlist = await this.$api.spotify.getPlaylist(this.$route.params.id)
    },

    async getRecommendedTracks() {
      this.isRefreshing = true
      const shuffledTrackIds = this.playlist.tracks.items
        .slice()
        .sort(() => 0.5 - Math.random())
        .map(({ track }) => track.id)

      const { tracks: recommendations } =
        await this.$api.spotify.getRecommendations({
          seed_tracks: shuffledTrackIds.slice(0, 5).join(','),
          limit: 10,
        })

      this.recommendations = recommendations
      this.isRefreshing = false
    },

    async addTrackToPlaylist(track) {
      await this.$api.spotify.postTracksToPlaylist(this.playlist.id, [
        track.uri,
      ])

      this.recommendations.splice(
        this.recommendations.findIndex(({ id }) => id === track.id),
        1
      )

      this.getPlaylist()
    },
  },
}
</script>

<style></style>
