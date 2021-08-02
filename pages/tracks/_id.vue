<template>
  <div v-if="track">
    <div class="flex flex-col md:flex-row">
      <SpotifyImg
        :images="track.album.images"
        :sizes="['400px']"
        :alt="track.name"
      />
      <div class="mt-4 md:mt-0 md:ml-6">
        <h1 class="text-2xl md:text-4xl font-black mb-2">{{ track.name }}</h1>
        <div class="text-xl text-gray-300 font-bold mb-2">
          <a
            v-for="(artist, index) in track.artists"
            :key="artist.id"
            :href="artist.external_urls.spotify"
            target="_blank"
            rel="noopener"
            >{{ artist.name
            }}{{ track.artists.length > index + 1 ? ', ' : '' }}</a
          >
        </div>
        <div class="text-gray-400">
          <a
            :href="track.album.external_urls.spotify"
            target="_blank"
            rel="noopener"
            >{{ track.album.name }}</a
          >
          ·
          {{ track.album.release_date | moment('YYYY') }}
        </div>
      </div>
    </div>
    <div class="statistics -mx-8 mt-6">
      <Statistic
        name="Duration"
        :value="$moment.duration(track.duration_ms).format('m:ss')"
      />
      <Statistic name="Key" :value="pitchKey" />
      <Statistic name="Modality" :value="modality" />
      <Statistic name="Tempo (bpm)" :value="Math.floor(features.tempo)" />
      <Statistic name="Time Signature" :value="features.time_signature" />
      <Statistic name="Bars" :value="analysis.bars.length" />
      <Statistic name="Beats" :value="analysis.beats.length" />
      <Statistic name="Sections" :value="analysis.sections.length" />
      <Statistic name="Segments" :value="analysis.segments.length" />
      <Statistic name="Tatums" :value="analysis.tatums.length" />
    </div>
    <div class="flex flex-wrap">
      <VisualizationRadarChart
        class="flex-1 max-w-md"
        title="Audio Features"
        :data="featuresChartData"
      />
    </div>
  </div>
</template>

<script>
import { getKeyFromPitchClass, getModalityFromMode } from '@/utility/helpers'

export default {
  data() {
    return {
      track: null,
      features: null,
      analysis: null,
    }
  },

  async fetch() {
    const { id } = this.$route.params

    const [track, features, analysis] = await Promise.all([
      this.$api.spotify.getTrack(id),
      this.$api.spotify.getTrackFeatures(id),
      this.$api.spotify.getTrackAnalysis(id),
    ])

    this.track = track
    this.features = features
    this.analysis = analysis
  },

  computed: {
    artists() {
      return this.track.artists.map(({ name }) => name).join(', ')
    },

    pitchKey() {
      return getKeyFromPitchClass(this.features.key)
    },

    modality() {
      return getModalityFromMode(this.features.mode)
    },

    featuresChartData() {
      const {
        acousticness,
        danceability,
        energy,
        instrumentalness,
        liveness,
        speechiness,
        valence,
      } = this.features

      return {
        acousticness,
        danceability,
        energy,
        instrumentalness,
        liveness,
        speechiness,
        valence,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.statistics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
</style>
