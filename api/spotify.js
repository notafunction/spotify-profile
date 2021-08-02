const spotifyApiBaseUrl =
  process.env.SPOTIFY_API_BASE_URL ?? 'https://api.spotify.com'
const spotifyApiVersion = process.env.SPOTIFY_API_VERSION ?? 1
const spotifyApiUrl = `${spotifyApiBaseUrl}/v${spotifyApiVersion}`

export default (axios) => {
  axios.setBaseURL(spotifyApiUrl)

  return {
    getUserTopArtistsWithRange(range = 'long_term') {
      return axios.$get(`/me/top/artists`, {
        params: { time_range: range },
      })
    },

    getUserTopTracksWithRange(range = 'long_term') {
      return axios.$get(`/me/top/tracks`, {
        params: { time_range: range },
      })
    },

    getUserTopTracks() {
      return axios.$get(`/me/top/tracks`)
    },

    getUserRecentlyPlayed() {
      return axios.$get(`/me/player/recently-played`)
    },

    getUserPlaylists() {
      return axios.$get(`/me/playlists`)
    },

    getPlaylist(id) {
      return axios.$get(`/playlists/${id}`)
    },

    getArtist(id) {
      return axios.$get(`/artists/${id}`)
    },

    getTrack(id) {
      return axios.$get(`/tracks/${id}`)
    },

    getRecommendations(params) {
      return axios.$get(`/recommendations`, { params })
    },

    getTrackFeatures(id) {
      return axios.$get(`/audio-features/${id}`)
    },

    getTrackAnalysis(id) {
      return axios.$get(`/audio-analysis/${id}`)
    },

    postTracksToPlaylist(playlistId, trackIds) {
      return axios.$post(`/playlists/${playlistId}/tracks`, {
        uris: trackIds,
      })
    },
  }
}
