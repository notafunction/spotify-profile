<template>
  <div>
    <header
      class="
        flex flex
        items-end
        -mx-6
        -mt-6
        p-6
        md:-mx-12 md:-mt-12 md:p-12
        bg-gray-600
      "
    >
      <a
        class="overflow-hidden rounded-full w-20 h-20 md:h-36 md:w-36"
        :href="$auth.user.external_urls.spotify"
      >
        <SpotifyImg
          v-if="$auth.user.images.length"
          :images="$auth.user.images"
          :alt="$auth.user.display_name"
        />
      </a>
      <div class="ml-6">
        <h1 class="font-black text-4xl md:text-7xl">
          {{ $auth.user.display_name }}
        </h1>
        <span class="text-xs md:text-sm"
          >{{ $auth.user.followers.total }} followers</span
        >
      </div>
    </header>
    <div
      class="
        flex
        items-start
        justify-between
        flex-col
        md:flex-row
        pt-12
        -my-6
        md:-mx-4 md:my-0
      "
    >
      <ListContainer
        class="my-6 md:mx-4 md:my-0"
        title="Top Artists of All Time"
      >
        <template #action>
          <nuxt-link
            to="/artists"
            class="border-b border-transparent border-solid hover:border-white"
          >
            View All
          </nuxt-link>
        </template>

        <ArtistItem
          v-for="artist in artists.list"
          :key="artist.id"
          :artist="artist"
          class="my-4"
        />
      </ListContainer>

      <ListContainer
        class="my-6 md:mx-4 md:my-0"
        title="Top Tracks of All Time"
      >
        <template #action>
          <nuxt-link
            to="/tracks"
            class="border-b border-transparent border-solid hover:border-white"
          >
            View All
          </nuxt-link>
        </template>

        <TrackItem
          v-for="track in tracks.list"
          :key="track.id"
          :track="track"
          class="my-4"
        />
      </ListContainer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artists: {
        list: [],
      },
      tracks: {
        list: [],
      },
    }
  },

  async fetch() {
    try {
      const params = { time_range: 'long_term' }
      const [artists, tracks] = await Promise.all([
        this.$axios.$get(`${this.$config.spotifyApiUrl}/me/top/artists`, {
          params,
        }),
        this.$axios.$get(`${this.$config.spotifyApiUrl}/me/top/tracks`, {
          params,
        }),
      ])

      this.artists.list = artists.items
      this.tracks.list = tracks.items
    } catch (error) {}
  },
}
</script>
