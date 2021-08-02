import axiosRetry from 'axios-retry'
import SpotifyApi from '@/api/spotify'

export default ({ $axios, $toast, redirect }, inject) => {
  $axios.onError((error) => {
    if (error.response) {
      if ([400, 500].includes()) {
        $toast.error(error.message)
      }
    } else if (error.request) {
      $toast.error(error.message)
    } else {
      $toast.error(error.message)
    }
  })

  axiosRetry($axios, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
  })

  // const apiClient = $axios.create()
  const apiFactories = {
    spotify: SpotifyApi($axios),
  }

  inject('api', apiFactories)
}
