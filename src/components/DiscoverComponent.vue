<template>

		<text-image-data-component>
			<template #title >
				<h2 class="content__title title">
					{{ title }}
				</h2>
				
			</template>
			<template #description>
				<p class="content__description description">
					{{ description }}
				</p>
			</template>
			<template #button >
				<button class="content__button button">
					{{ buttonTitle }}
				</button>
			</template>
			<template #image>
				<div class="section__image-ibg-contain">
					<img :src="image" alt="cup of coffee beans">
				</div>
			</template>
		</text-image-data-component>
</template>

<script>
import TextImageDataComponent from './TextImageDataComponent.vue'
	export default {
		name:"DiscoverComponent",
		components: { TextImageDataComponent },
		data() {
			return {
				title: 'Discover the best coffee',
				description: 'Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.',
				buttonTitle: 'Learn more',
				image: require('@/assets/images/beans_cup.png')
			}
		},
	}
</script>

<style lang="scss" scoped>
.discover {
	padding-top: 11.25rem; 
	padding-bottom: 4.37rem; 
	@media (max-width: 991px) { 
		padding-top: 6rem; 
		padding-bottom: 1rem; 
	}
	@media (max-width: 767px) { 
		padding-top: 4rem; 
		padding-bottom: 0.5rem; 
	}
	@media (max-width: 450px) { 
		padding-top: 3rem; 
	}
	// .discover__container

	&__container {
		@media (max-width: 767px) { 
			padding-left: 2rem; 
			padding-right: 2rem; 
		}
	}

	// .discover__section

	&__section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 1.25rem; 
		@media (max-width: 991px) { 
			grid-template-columns: auto;
			row-gap: 1rem;
		}
	}
}
.section {
	
	// .section__content

	&__content {


	}

	// .section__image

	&__image-ibg-contain {
		padding-bottom: 70%; /* 476/680 */

		img{
		object-position: center;


		}
	}
}
.content {

	// .content__title

	&__title {
		&:not(:last-child) {
			margin-bottom: 3.12rem; /* 50/16 */
		}
		@media (max-width: 767px) { 
			font-size: 2.87rem; /* 46/16 */
			&:not(:last-child) {
				margin-bottom: 2rem; /* 50/16 */
			}
		}
		@media (max-width: 450px) { 
			font-size: 2.62rem; 

		}
	}

	// .content__description

	&__description {
		&:not(:last-child) {
			margin-bottom: 2.37rem; /* 38/16 */
		}
		@media (max-width: 767px) { 
			&:not(:last-child) {
				margin-bottom: 1.5rem; /* 50/16 */
			}
		}
	}

	// .content__button

	&__button {
	}
}
.button {
}

</style>