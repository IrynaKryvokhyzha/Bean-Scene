<template>
	<main-master-page>
		<div class="about">
			<div class="about__container">
				<div class="about__start start">
					<div class="start__header">
						<h1 class="start__title title">WHERE TO BEGIN?</h1>
						<h5 class="start__description description">HOW ABOUT HERE...</h5>
					</div>
					<div class="start__image-ibg">
						<img src="../assets/images/about/cups.jpg" alt="two coffee cups">
					</div>
				</div>
				<div class="about__garage garage">
					<div class="garage__content">
						<h1 class="garage__title title">25 years ago we started roasting coffee.</h1>
						<h5 class="garage__description description">In a garage.</h5>
						<p class="garage__text description">Out in the Canadian Rocky Mountains, pretty much near the middle of nowhere.</p>
					</div>
					<div class="garage__image">
						<img src="../assets/images/about/garage.jpg" alt="garage">
					</div>
				</div>
				<div class="about__then then">
					<div class="then__image">
						<img src="../assets/images/about/beans.jpg" alt="beans">
					</div>
					<div class="then__content">
						<h1 class="then__title title">That was then.</h1>
						<p class="then__text description">Fast forward to today, and it’s basically still just the same.</p>
					</div>
				</div>
				<div class="about__hill hill">
					<div class="hill__content">
						<h1 class="hill__title title">That’s our story.</h1>
						<h5 class="hill__description description">NOW, THIS HERE’S THE LEGEND.</h5>
						<p class="hill__text description">Way back when, a Rocky Mountain explorer got kicked in the head by a horse.</p>
						<p class="hill__text description">His traveling compadres thought he was dead, and started digging a grave.</p>
						<p class="hill__text description">But, whoa! Legend has it he was woken up by a kick-ass cup of coffee.</p>
						<p class="hill__text description">Couldn’t make that shtuff up.</p>
					</div>
					<div class="hill__image">
						<img src="../assets/images/about/hill.jpg" alt="hill">
					</div>
				</div>
			</div>
		</div>
	</main-master-page>
</template>

<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
	export default {
  components: { MainMasterPage },
		name:'AboutView'
	}
</script>

<style lang="scss" scoped>
.about {

	// .about__container

	&__container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		@media (max-width: 767px) { 
			padding-left: 0px;
			padding-right: 0px;
		}
	}

	// .about__start

	&__start {
		
	}

	// .about__garage

	&__garage {
	}

	// .about__then

	&__then {
	}

	// .about__hill

	&__hill {
	}
}


.start {
position: relative;
padding: 0 2rem 0 4rem;
height: 100vh;
@media (max-width: 550px) { 
	padding: 0 2rem 0 2rem;
}
@media (max-width: 400px) { 
	padding: 0.5rem;
}
	// .start__header

	&__header {
	}

	// .start__title

	&__title {
		position: absolute;
		color: #fff;
		bottom: 10rem;
		z-index: 5;
		@media (max-width: 767px) { 
			font-size: 3rem;
			bottom: 9rem;
		}
		@media (max-width: 550px) { 
			font-size: 2rem;
			bottom: 6rem;
		}
		@media (max-width: 400px) { 
			//font-size: 1.5rem;
			bottom: 5rem;
		}
	}

	// .start__description

	&__description {
		position: absolute;
		bottom: 5rem;
		color: #fff;
		z-index: 5;
		font-size: 2rem;
		line-height: 1.3;
		@media (max-width: 767px) { 
			font-size: 1.5rem;
		}
		@media (max-width: 550px) { 
			font-size: 1rem;
			bottom: 3rem;
		}
		@media (max-width: 400px) { 
			bottom: 2.5rem;
		}
	}

	// .start__image-ibg

	&__image-ibg {
		position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			
	}
}

.garage {
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-content: center;
align-items: center;
gap: 30px;

@media (max-width: 767px) { 
	grid-template-columns: auto;
}
	// .garage__content

	&__content {

padding: 0 1rem;
	}

	// .garage__title

	&__title {
		&:not(:last-child){
			margin-bottom: 2rem;
		}
		@media (max-width: 991px) { 
			font-size: 2.5rem;
		}

	}

	// .garage__description

	&__description {
		&:not(:last-child){
			margin-bottom: 1rem;
		}


	}

	// .garage__text

	&__text {

		z-index: 5;
	}

	// .garage__image

	&__image {

		img{
			max-width: 100%;
			

		}
	}
}
.then {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	gap: 30px;
	@media (max-width: 767px) { 
		grid-template-columns: auto;
		gap: 20px;
	}
	// .then__image

	&__image {
		@media (max-width: 767px) { 
			order: 1;
		}
		img{
			width: 100%;

		}
	}

	// .then__content

	&__content {
		padding: 0 1rem;

	}

	// .then__title

	&__title {
		&:not(:last-child){
			margin-bottom: 2rem;
		}
		@media (max-width: 991px) { 
			font-size: 2.5rem;
		}
		@media (max-width: 767px) { 
			&:not(:last-child){
				margin-bottom: 1rem;
			}
		}

	}

	// .then__text

	&__text {

	}
}

.hill {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	gap: 30px;
	@media (max-width: 767px) { 
		grid-template-columns: auto;
		grid-column-start: 2;
	}
	// .hill__content

	&__content {
		padding: 0 1rem;

	}

	// .hill__title

	&__title {
		&:not(:last-child){
			margin-bottom: 2rem;
		}

		@media (max-width: 991px) { 
			font-size: 2.5rem;
		}
	}

	// .hill__description

	&__description {
		&:not(:last-child){
			margin-bottom: 2rem;
		}
	}

	// .hill__text

	&__text {
		&:not(:last-child){
			margin-bottom: 2rem;
		}
		@media (max-width: 767px) { 
			&:not(:last-child){
				margin-bottom: 0.5rem;
			}
		}

	}

	// .hill__image

	&__image {
		img{
			width: 100%;

		}
	}
}



</style>
