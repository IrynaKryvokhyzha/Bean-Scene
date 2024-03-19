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
	padding-top: 5.93rem; /* 95/16 */
	padding-bottom: 8.75rem; /* 140/16 */
		// .feedback__container

		&__container {
	
		}

		// .feedback__section

		&__section {
		}
}
.section {
padding-bottom: 30px;
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
	// .content__title

	&__title {
		text-align: center;
		&:not(:last-child){
			margin-bottom: 1rem; /* 50/16 */
		}
	}

	// .content__description

	&__description {
		text-align: center;

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