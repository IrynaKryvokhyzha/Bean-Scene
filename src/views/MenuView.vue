<template>
	<div>
		<header-component/>
			<flavors-list class="flavors" :getFlavorsList="fullFlavorsList"/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import FlavorsList from '../components/flavors/FlavorsList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
	export default {
		name: 'MenuView',
		components: { HeaderComponent, FlavorsList },
		computed: {
			fullFlavorsList() {
				return this.getFlavorsList()
			}
		},
		methods: {
			...mapGetters ('flavorsItems',['getFlavorsList']),
		},
	}

</script>

<style lang="scss" scoped>
.flavors{
	margin-top: 6rem;
	@media (max-width: 767px){
		margin-top: 4.75rem;
	}
}
</style>