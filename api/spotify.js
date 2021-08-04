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

    getUserTopTracks(options) {
      return axios.$get(`/me/top/tracks`, options)
    },

    getUserRecentlyPlayed(options) {
      return axios.$get(`/me/player/recently-played`, options)
    },

    getUserPlaylists(options) {
      return axios.$get(`/me/playlists`, options)
    },

    getPlaylist(id, options) {
      return axios.$get(`/playlists/${id}`, options)
    },

    getPlaylistTracks(id, options) {
      return axios.$get(`/playlists/${id}/tracks`, options)
    },

    getArtist(id, options) {
      return axios.$get(`/artists/${id}`, options)
    },

    getTrack(id, options) {
      return axios.$get(`/tracks/${id}`, options)
    },

    getRecommendations(options) {
      return axios.$get(`/recommendations`, options)
    },

    getTrackFeatures(id, options) {
      return axios.$get(`/audio-features/${id}`, options)
    },

    getTrackAnalysis(id, options) {
      return axios.$get(`/audio-analysis/${id}`, options)
    },

    postTracksToPlaylist(playlistId, trackIds) {
      return axios.$post(`/playlists/${playlistId}/tracks`, {
        uris: trackIds,
      })
    },
  }
}
