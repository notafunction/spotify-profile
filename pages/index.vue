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
        <picture>
          <source
            v-for="image in $auth.user.images"
            :key="image.url"
            :srcset="image.url"
          />
          <SpotifyImg
            :images="$auth.user.images"
            :alt="$auth.user.display_name"
          />
        </picture>
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
      <TopListArtistsContainer class="my-6 md:mx-4 md:my-0" />
      <TopListTracksContainer class="my-6 md:mx-4 md:my-0" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
