<template>
  <router-view />
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: "App",
  //   mounted() {
  //     this.handleRedirectResult();
  //   },
  //   methods: {
  //      ...mapActions("auth", ["handleRedirectResult"]),
  //   },
};
</script>
<style lang="scss">
@import "./assets/styles/";
#app {
  min-height: 100hv;
  //font-family: Playfair Display;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #f9c06a;
    }
  }
}
</style>
