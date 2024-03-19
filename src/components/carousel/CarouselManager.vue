<template>

		<carousel-list/>

</template>

<script>
import { mapActions } from 'vuex';
import CarouselList from './CarouselList.vue';
	export default {
		name:'CarouselManager',
		components: { CarouselList },
		mounted () {
		this.loadFeedbackList();
	 },

	 methods: {
			...mapActions('feedbackItems', ['loadFeedbackList']),
	 },
	}
</script>

<style lang="scss" scoped>

</style>