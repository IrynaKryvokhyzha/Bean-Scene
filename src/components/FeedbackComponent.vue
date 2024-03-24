<template>
	<section class="feedback">
		<div class="feedback__container">
			<div class="feedback__section section">
				<div class="section__content content">
					<h2 class="content__title title">
						Our coffee perfection feedback
					</h2>
					<p class="content__description description">
						Our customers has amazing things to say about us
					</p>
				</div>


				<carousel-manager/>

				</div>
		</div>
	</section>
</template>

<script>
import CarouselManager from './carousel/CarouselManager.vue';

	export default {
		name:'FeedbackComponent',
		components:  { CarouselManager },

	}
	
</script>

<style lang="scss" scoped>
.feedback {
	position: relative;
	padding: 5.93rem 1rem 1rem 1rem  ; 
	@media (max-width: 991px) { 
		padding-top: 3rem;
	}
	@media (max-width: 767px) { 
		padding-top: 1.5rem;
	}
	@media (max-width: 485px) { 
		display: none;
	}
	&::before{
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 5%;
		left: 0;
		background: url(../assets/images/coffee_blast.png) bottom / contain no-repeat;
		max-width: 35%;
		z-index: 10;
	}
	&::after{
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: -15%;
		right: 0;
		background: url(../assets/images/coffee_blast.png) bottom / contain no-repeat;
		transform: rotate(180deg);
		max-width: 35%;
		z-index: 10;
		@media (max-width: 600px) {
			bottom: -20%;
		}
	}
		// .feedback__container

		&__container {
			@media (max-width: 767px) { 
				padding-left: 0;
				padding-right: 0;
			}
			
		}

		// .feedback__section

		&__section {
		}
}
.section {

	// .section__content

	&__content {
	}

	// .section__slider

	&__slider {
	}
}
.content {
	&:not(:last-child){
		margin-bottom: 3.12rem; /* 50/16 */
	}
	@media (max-width: 991px) { 
		&:not(:last-child){
			margin-bottom: 2rem; /* 50/16 */
		}
	}
	@media (max-width: 481px) { 
		
		&:not(:last-child){
			margin-bottom: 1rem; 

		}
		
	}
	// .content__title

	&__title {
		text-align: center;
		&:not(:last-child){
			margin-bottom: 1rem; /* 50/16 */
		}
		@media (max-width: 767px) { 
			font-size: 2.87rem; /* 46/16 */
			&:not(:last-child) {
				margin-bottom: 0.5rem; /* 50/16 */
			}
		}
		@media (max-width: 481px) { 
			font-size: 2.2rem; 
			line-height: 1.2;

		}
	}

	// .content__description

	&__description {
		text-align: center;
		@media (max-width: 481px) { 
			line-height: 1.3;

		}
	}
}






.section {

	// .section__slider

	&__slider {
	}
}
.slider {

	// .slider__slider-wrapper

	&__slider-wrapper {
		position: relative;
		
	}

	// .slider__page

	&__page {
		//display: flex;
		//
		//
		//overflow-x: auto;
	}
}
.page {
	display: flex;
	//flex-direction: row;
	overflow-x: auto;
	aspect-ratio: 2/1;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	min-height: 32.75rem; /* 524/16 */
	// .page__item

	&__item {
		
		flex: 1 0 100%;
		scroll-snap-align: start;

	}
}
.item {

	// .item__content

	&__content {

		width:61.25rem;
	}

	// .item__action

	&__action {
	}
}
.content-slider {

	// .content-slider__text

	&__text {

	}

	// .content-slider__name

	&__name {
	}

	// .content-slider__position

	&__position {
	}

	// .content-slider__image

	&__image {
	}
}

</style>