<template>
  <div v-if="playlist" class="flex flex-col md:flex-row mx-auto">
    <section class="flex flex-col items-center mb-6 md:mb-0 md:mr-6">
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

    <section>
      <div>
        <h1 class="text-2xl mb-8">Tracks</h1>
        <TrackItem
          v-for="{ track } in playlist.tracks.items"
          :key="track.id"
          class="my-4"
          :track="track"
        />
      </div>
      <div class="mt-6">
        <h1 class="text-2xl mb-8">Recommended Tracks</h1>
        <TrackItem
          v-for="track in recommendations"
          :key="track.id"
          class="my-4"
          :track="track"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlist: null,
      recommendations: [],
    }
  },

  async fetch() {
    this.playlist = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/playlists/${this.$route.params.id}`
    )

    const shuffledTrackIds = this.playlist.tracks.items
      .slice()
      .sort(() => 0.5 - Math.random())
      .map(({ track }) => track.id)

    const { tracks: recommendations } = await this.$axios.$get(
      `${this.$config.spotifyApiUrl}/recommendations`,
      {
        params: {
          seed_tracks: shuffledTrackIds.slice(0, 5).join(','),
        },
      }
    )

    this.recommendations = recommendations
  },
}
</script>

<style></style>
