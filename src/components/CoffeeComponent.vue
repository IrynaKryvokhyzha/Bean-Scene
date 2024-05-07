<template>
	<section class="coffee">
		<div class="coffee__image-ibg">
			<img src="@/assets/images/coffee_image.jpg" alt="cup with beans near by">
		</div>
		<div class="coffee__container1">
			<div class="coffee__section-header header-section">
				<transition appear name="subheader">
					<h3 class="header-section__subheader">We’ve got your morning covered with </h3>
				</transition>
				<transition appear name="fade">
					<h1 class="header-section__header">coffee</h1>
				</transition>
				<transition appear name="paragraph">
					<p class="header-section__description">
						It is best to start your day with a cup of coffee. Discover the
						best flavours coffee you will ever have. We provide the best
						for our customers.
					</p>
				</transition>
				<transition appear name="button">
					<button class="header-section__button button" @click="onMenu">Order Now</button>
				</transition>
			</div>

		</div>
	</section>
</template>

<script>
	export default {
		name:'CoffeeComponent',
		methods: {
			onMenu(){
				this.$router.push({
					name: 'menu'
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
.coffee {

	// .coffee__container

	&__container1 {
		position: relative;
		padding-top: 220px;
		padding-bottom: 15px;
		color: #fff;
		height: 100vh;
		@media (max-width: 587px) { 
		padding-top: 100px;
			padding-left: 40px;
			padding-right: 40px;
		}
		@media (max-width: 406px) { 	
			padding-left: 20px;
			padding-right: 20px;
		}
	}

	// .coffee__section-header

	&__section-header {
		position: relative;
		z-index: 2;
		margin: 0 auto;
		max-width: 625px;


	}

	// .coffee__image-ibg

	&__image-ibg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		&::after{
			content: " ";
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background:linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
			
		}
	}
}
.header-section {

	// .header-section__subheader

	&__subheader {
		margin-bottom: 2.8rem; /* 45/16 */
		font-size: 1.37rem; /* 22/16 */
		font-weight: 500;
		line-height: 1.3;
		@media (max-width: 510px) { 
			margin-bottom: 1.5rem;
		}
		@media (max-width: 448px) { 
			margin-bottom: 1rem;
			font-size: 1rem;
		}
	}

	// .header-section__header

	&__header {
		font-family: "Clicker Script";
		font-size: 13.75rem; /* 220/16 */
		font-weight: normal;
		text-transform: capitalize;
		margin-bottom: 1.87rem; /* 30/16 */
		@media (max-width: 624px) { 
		font-size: 10rem; 
		}
		@media (max-width: 448px) { 
			font-size: 6.5rem;

		}
	}

	// .header-section__description

	&__description {
		font-size: 1.25rem; /* 20/16 */
		font-weight: 400;
		line-height: 2.12rem; /* 34/16 */
		margin-bottom: 1.68rem; /* 27/16 */
		@media (max-width: 533px) { 
			margin-bottom: 1.3rem;
			line-height: 1.8rem;
		}
		@media (max-width: 448px) { 
			line-height: 1.5rem;
			font-size: 1rem;
		}
	}

}
//Animations
.fade-enter-from{
	opacity: 0;
	transform: translateX(-300px);
}
.fade-enter-active{
	transition: all 5s ease;
}

.subheader-enter-from,
.paragraph-enter-from{
	opacity: 0;
	transform: translateX(300px);
}
.subheader-enter-active,
.paragraph-enter-active{
	transition: all 5s ease;
}
.button-enter-from{
	opacity: 0;

}
.button-enter-active{
	transition: opacity 5s ease;
}
</style>