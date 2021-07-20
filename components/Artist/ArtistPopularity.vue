<template>
  <div>
    <span>{{ popularity }}</span>
    <span></span>
    <span>{{ total }}</span>
  </div>
</template>

<script>
export default {
  props: {
    popularity: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 100,
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  width: 50px;
  height: 40px;

  span {
    display: block;
    position: absolute;

    &:first-child {
      top: 0;
      left: 0;
    }

    &:last-child {
      bottom: 0;
      right: 0;
    }
  }
}
</style>
