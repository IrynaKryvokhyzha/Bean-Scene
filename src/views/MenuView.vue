<template>
	<div>
		<main-master-page>
			<flavors-list class="flavors" :getFlavorsList="fullFlavorsList"/>
      </main-master-page>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import FlavorsList from '../components/flavors/FlavorsList.vue'
	export default {
		name: 'MenuView',
		components: { MainMasterPage, FlavorsList },
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