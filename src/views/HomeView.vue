<template>
	<main-master-page>
	<coffee-component/>
	<discover-component/>
	<flavors-list :get-flavors-list="firstFourFlavors">
	 <template #header>
      <h2 class="title">{{title}}</h2>
		<h5 class="description">{{description}}</h5>
	 </template>
	</flavors-list>
	<difference-component/>
	<chance-component/>
	<feedback-component/>
	<subscribe-component/>
	</main-master-page>
</template>

<script>
import { mapGetters } from 'vuex';
import SubscribeComponent from '@/components/SubscribeComponent.vue';
import ChanceComponent from '../components/ChanceComponent.vue';
import CoffeeComponent from '../components/CoffeeComponent.vue';
import DifferenceComponent from '../components/DifferenceComponent.vue';
import DiscoverComponent from '../components/DiscoverComponent.vue';
import FeedbackComponent from '../components/FeedbackComponent.vue';
import FlavorsList from '../components/flavors/FlavorsList.vue';
import MainMasterPage from '../masterpages/MainMasterPage.vue';
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { 
		MainMasterPage, 
		CoffeeComponent, 
		DiscoverComponent, 
		FlavorsList, 
		DifferenceComponent, 
		ChanceComponent, 
		FeedbackComponent,
		SubscribeComponent
	},
	data() {
		return {
			title: 'Enjoy a new blend of coffee style',
			description: 'Explore all flavours of coffee with us. There is always a new cup worth experiencing',

		}
	},
	computed: {
		
		firstFourFlavors() {
      return this.getFirstFourFlavors()
		}
	},
	methods: {
		...mapGetters ('flavorsItems',['getFirstFourFlavors']),
	},
	
};
</script>
<style lang="scss" scoped>
.title {
	text-align: center;
	&:not(:last-child) {
		margin-bottom: 1.87rem; /* 30/16 */
	}
	@media (max-width: 530px) { 
		font-size: 2.87rem; 
		
	}
}


.description {
	text-align: center;
	&:not(:last-child) {
		margin-bottom: 2.31rem; /* 37/16 */
	}
}
</style>