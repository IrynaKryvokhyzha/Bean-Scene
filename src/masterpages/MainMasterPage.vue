<template>
<header-component/>
<main class="main">
	<slot></slot>
</main>
<footer-component/>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
	export default {
		name:'MainMasterPage',
		components: { HeaderComponent, FooterComponent },

	}
</script>

<style lang="scss" scoped>

</style>