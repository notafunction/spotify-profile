<template>
  <img
    :srcset="imageSrcset"
    :sizes="imageSizes"
    :src="images[0].src"
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
        .map((image) => `${image.url} ${image.width}w`)
        .join(',')
    },

    imageSizes() {
      return this.sizes.join(',')
    },
  },
}
</script>
