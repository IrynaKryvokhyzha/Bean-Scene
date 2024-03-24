<template>
	<div class="carousel-container">
		<div class="carousel-wrapper">
			<div class="carousel-inner">
				<carousel-controls @prev="prev" @next="next"/>
				<carousel-item 
					v-for="(slide, index) in getFeedbackList" 
					:key="slide.id" 
					:slide-data="slide" 
					:current-slide="currentSlide"
					:index="index"
					:direction="direction"
					@mouseover="stopSlideInterval"
					@mouseout="startSlideInterval"
				>
				</carousel-item>
			</div>
		</div>
	</div>
</template>

<script>
import CarouselItem from './CarouselItem.vue'
import CarouselControls from './CarouselControls.vue';
import { mapGetters} from 'vuex';

	export default {
		name:'CarouselList',
		components: { CarouselItem, CarouselControls },
		data() {
			return {
				currentSlide: 0,
				slideInterval: null,
				direction: "right"
			}
		},
		computed: {
			...mapGetters('feedbackItems',['getFeedbackList'])
		},

		mounted () {
			this.startSlideInterval()
		},
		beforeUnmount (){
			this.stopSlideInterval();
			document.removeEventListener("visibilitychange", this.handleVisibilityChange);
		},



		methods: {
			setCurrentSlide(index) {
				this.currentSlide = index
			},
			prev(){
				const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.getFeedbackList.length - 1;
				this.setCurrentSlide(index)
				this.direction='left'
				this.startSlideInterval()
			},
			_next(){
				const index = this.currentSlide < this.getFeedbackList.length - 1 ? this.currentSlide + 1 : 0;
				this.setCurrentSlide(index)
				this.direction='right'
			},
			next(){
				this._next()
				this.startSlideInterval()
			},
			startSlideInterval() {
				this.stopSlideInterval()
				this.slideInterval = setInterval(() => {
					this._next()
					document.addEventListener("visibilitychange", this.handleVisibilityChange);
				}, 3000);
			},
			stopSlideInterval() {
				clearInterval(this.slideInterval);
			},
			handleVisibilityChange() {
				document.hidden ? this.stopSlideInterval() : this.startSlideInterval()
			},
		},


	}
</script>

<style lang="scss" scoped>
.carousel-container {
	position: relative;
	display: flex;
	justify-content: center;
	
}
.carousel-wrapper{
	position: relative;

}
.carousel-inner{
	position: relative;
	min-width: 61.25rem;
	min-height: 40rem;
	margin: 0 auto;
	overflow: hidden;
	@media (max-width: 1013px) { 
		min-width: 50rem;
	}
	@media (max-width: 991px) { 
		min-width: 45rem;
	}
	@media (max-width: 767px) { 
		min-width: 40rem;
		min-height: 35rem;
	}
	@media (max-width: 655px) { 
		min-width: 30rem;
		min-height: 36rem;
	}
}
</style>