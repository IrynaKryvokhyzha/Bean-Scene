<template>
	<section class="discover">
		<div class="discover__container">
			<div class="discover__section section">
				<div class="section__content content">
						<h2 class="content__title title">
							Discover the best coffee
						</h2>
						<p class="content__description description">
							Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
						</p>
						<button class="content__button button" @click="onAboutUs">
							Learn more
						</button>
				</div>
				<div class="section__image-ibg-contain">
					<img src="@/assets/images/beans_cup.png" alt="cup from beans">
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>

	export default {
		name:"DiscoverComponent",
		methods: {
			onAboutUs(){
				this.$router.push({
					name: 'about'
					
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
.discover {
	position: relative;
	padding-top: 11.25rem; 
	padding-bottom: 4.37rem; 

	@media (max-width: 991px) { 
		padding-top: 6rem; 
		padding-bottom: 1rem; 
	}
	@media (max-width: 767px) { 
		padding-top: 3rem; 
		padding-bottom: 0.5rem; 
	}
	@media (max-width: 450px) { 
		padding-top: 2rem; 
	}

	// .discover__container

	&__container {
		
		@media (max-width: 767px) { 
			padding-left: 2rem; 
			padding-right: 2rem; 
		}
		&::after{
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			top: 10%;
			left: -5%;
			background: url(../assets/images/coffee_blast.png) top/ contain no-repeat;
			transform: rotateX(180deg);
			max-width: 35%;
			z-index: 10;
			@media (max-width: 1130px) { 
				top: 20%;
			}
			@media (max-width: 991px) { 
				top: 0;
			}
		}
	}

	// .discover__section

	&__section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1.25rem; 
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
			&:not(:last-child) {
				margin-bottom: 1rem; /* 50/16 */
			}
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
	position: absolute;
	z-index: 20;
}


</style>