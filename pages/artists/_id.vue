<template>
  <div v-if="artist" class="m-auto">
    <div class="flex flex-col items-center">
      <div class="m-auto rounded-full overflow-hidden">
        <SpotifyImg
          class="object-cover"
          :images="artist.images"
          :sizes="['400px']"
          :alt="artist.name"
        />
      </div>
      <h1 class="text-4xl md:text-7xl text-center my-6 font-black">
        {{ artist.name }}
      </h1>
      <ul class="text-center" aria-label="Genres">
        <Tag v-for="genre in artist.genres" :key="genre" class="m-1">{{
          genre | capitalize
        }}</Tag>
      </ul>
      <div class="flex flex-wrap mt-6 w-4/5">
        <Statistic name="Popularity" class="mx-6 flex-1">
          <span>
            <span class="text-spotify text-2xl">{{
              tweenedPopularity.toFixed(0)
            }}</span
            ><span class="text-xl"> / 100</span>
          </span>
        </Statistic>
        <Statistic
          class="mx-6 flex-1"
          name="Followers"
          :value="Number(tweenedFollowers.toFixed(0)).toLocaleString()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      artist: null,
      tweenedPopularity: 0,
      tweenedFollowers: 0,
    }
  },

  async fetch() {
    this.artist = await this.$api.spotify.getArtist(this.$route.params.id)
    this.tweenValues()
  },

  methods: {
    tweenValues() {
      gsap.to(this, {
        duration: 2,
        ease: 'expo',
        tweenedPopularity: this.artist.popularity,
        tweenedFollowers: this.artist.followers.total,
      })
    },
  },
}
</script>

<style></style>
