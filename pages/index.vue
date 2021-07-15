<template>
  <div>
    <header class="user-profile">
      <a class="user-profile__image" :href="$auth.user.external_urls.spotify">
        <picture>
          <source v-for="image in $auth.user.images" :key="image.url" :srcset="image.url" />
          <img :src="$auth.user.images[$auth.user.images.length - 1].url" />
        </picture>
      </a>
      <div class="user-profile__details">
        <h1>{{ $auth.user.display_name }}</h1>
        <span>{{ $auth.user.followers.total }} followers</span>
      </div>
    </header>
    <div class="top-lists-container -my-6 md:-mx-4 md:my-0">
      <TopListArtistsContainer class="my-6 md:mx-4 md:my-0" />
      <TopListTracksContainer class="my-6 md:mx-4 md:my-0" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile {
  display: flex;
  align-items: flex-end;
  @apply -mx-12 -mt-12 p-12 bg-gray-600;

  &__image {
    overflow: hidden;
    @apply rounded-full h-36 w-36;

    .isMobile & {
      @apply w-20 h-20;
    }
  }

  &__details {
    @apply ml-6;

    h1 {
      @apply text-7xl font-black;

      .isMobile & {
        @apply text-4xl;
      }
    }

    span {
      @apply text-sm;

      .isMobile & {
        @apply text-xs;
      }
    }
  }
}

.top-lists-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @apply mt-12;

  .isMobile & {
    flex-direction: column;
  }
}
</style>