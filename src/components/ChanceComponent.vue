<template>
	<section class="chance">
			<div class="chance__section section">
				<div class="section__content content">
						<h2 class="content__title title">
							Get a chance to have an Amazing morning
						</h2>
						<p class="content__description description">
							We are giving you a one time opportunity to experience a better life with coffee.
						</p>
						<button class="content__button button" @click="onMenu">
							Order Now
						</button>
				</div>
				<div class="section__image-ibg-contain">
					<img src="../assets/images/chance/cup.png" alt="cup">
				</div>
		</div>
	</section>
</template>

<script>
	export default {
		name:'ChanceComponent',
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
.chance {
	position: relative;
	background: url(../assets/images/chance/background.png) right / cover no-repeat;
	max-width: 1366px;
	margin: 0 auto;


	&::after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #481804;
		opacity: 0.8;
	// .chance__section

	&__section {
		
	}
}
.section {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1.25rem; 
	
	@media (max-width: 991px) { 
		grid-template-columns: auto;
		row-gap: 1rem;
	}
	// .section__content

	&__content {
	}

	// .section__image-ibg-contain

	&__image-ibg-contain {
		padding-bottom: 70%; /* 476/680 */
		position: relative;
		z-index: 5;
		&::before{
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: url(../assets/images/chance/coffee_bean.png) bottom / cover no-repeat;
		}
		img{
			padding-top: 4rem; /* 64/16 */
			padding-bottom: 2rem;
			@media (max-width: 767px) { 
				padding-top: 1rem; /* 64/16 */
				padding-bottom: 1rem;
			}
		}
		
	}
}
.content {
	padding-left: 5.81rem; /* 93/16 */
	padding-right: 1rem;
	padding-top: 9.37rem; /* 150/16 */
	padding-bottom: 8.43rem; /* 135/16 */
	@media (max-width: 991px) { 
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	@media (max-width: 767px) { 
		padding-left: 2rem; 
		padding-right: 2rem; 
		padding-bottom: 1rem;
		padding-top: 2rem;
	}

	// .content__title

	&__title {
		padding-top: 4rem; 
		padding-bottom: 0.5rem;
		position: relative;
		z-index: 5;
		color: #fff;
		&:not(:last-child) {
			margin-bottom: 2.06rem; /* 33/16 */
		}
		@media (max-width: 767px) { 
			padding-top: 2rem;
			font-size: 2.87rem;
			&:not(:last-child) {
				margin-bottom: 1rem; /* 50/16 */
			}
		}
		@media (max-width: 450px) { 
			padding-top: 1rem; 
			font-size: 2rem;
		}
	}

	// .content__description

	&__description {
		position: relative;
		z-index: 5;
		color: #fff;
		&:not(:last-child) {
			margin-bottom: 1.56rem; /* 25/16 */
		}
	}

	// .content__button

	&__button {
		position: relative;
		z-index: 5;
	}
}

}
</style>