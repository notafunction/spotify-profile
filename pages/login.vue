<template>
  <main>
    <Button @click="handleLogin">Login with Spotify</Button>
  </main>
</template>

<script>
export default {
  layout: 'login',

  mounted() {
    if (this.$auth.loggedIn) this.$router.replace('/')
  },

  methods: {
    handleLogin() {
      this.$auth.loginWith('spotify')
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
