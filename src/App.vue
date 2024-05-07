<template>
	<div class="wrapper">
		<router-view />
	</div>
</template>

<style lang="scss">
@import './assets/styles/';
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
		color: #F9C06A;
	 }

   
  }
}

</style>
