<template>
  <img
    v-if="images.length"
    :width="sizes[0]"
    :height="sizes[0]"
    :srcset="imageSrcset"
    :sizes="imageSizes"
    :src="images[0].src"
    :alt="alt"
  />
  <img
    v-else
    :src="require('@/assets/icons/spotify-logo.svg')"
    :width="sizes[0]"
    :height="sizes[0]"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },

    sizes: {
      type: Array,
      default: () => ['64px'],
    },
  },

  computed: {
    imageSrcset() {
      return this.images
        .map(
          (image) =>
            `${image.url} ${
              image.width || this.sizes[this.sizes.length - 1].replace('px', '')
            }w`
        )
        .join(',')
    },

    imageSizes() {
      return this.sizes.join(',')
    },
  },
}
</script>
