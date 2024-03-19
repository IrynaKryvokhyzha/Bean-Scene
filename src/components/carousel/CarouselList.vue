<template>
	<div class="carousel">
		
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
			// startSlideTimer(){
			// 	this.startSlideInterval();
			// 	document.addEventListener("visibilitychange", this.handleVisibilityChange);
			// },
		},


	}
</script>

<style lang="scss" scoped>
.carousel{
	display: flex;
	justify-content: center;

}
.carousel-inner{
	position: relative;
	min-width: 980px;
margin: 50px;
	//width: 61.25rem; /* 980/16 */
	min-height: 36.25rem; /* 580/16 */
	margin: 0 auto;
	overflow: hidden;
}
</style>