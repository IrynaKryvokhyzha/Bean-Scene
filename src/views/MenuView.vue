<template>
	<div>
		<main-master-page>
			<flavors-list/>
		</main-master-page>
	</div>
</template>

<script>
import FlavorsList from '../components/FlavorsList.vue'
import MainMasterPage from '../masterpages/MainMasterPage.vue'
	export default {
		name: 'MenuView',
		components: { MainMasterPage, FlavorsList },
	}
</script>

<style lang="scss" scoped>

</style>