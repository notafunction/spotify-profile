import Vue from 'vue'

Vue.filter('capitalize', (value) => {
  return value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})
