import Spotify from '@/api/spotify'

export default (context, inject) => {
  const factories = {
    spotify: Spotify(context.$axios),
  }

  inject('api', factories)
}
