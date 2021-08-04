<template>
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
      <span class="sr-only">{{ $auth.user.display_name }} Spotify Profile</span>
      <SpotifyImg
        v-if="$auth.user.images.length"
        :images="$auth.user.images"
        :alt="$auth.user.display_name"
        :sizes="['400px']"
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
</template>

<script>
export default {}
</script>

<style></style>
