<template>
	<section class="difference">
		<div class="difference__container">
			<h2 class="difference__title title">Why are we different?</h2>
			<h5 class="difference__description description">We don’t just make your coffee, we make your day!</h5>
			<div class="difference__cards cards">
				<div v-for="item in getDifferenceList" :key="item.id" class="cards__item">
					<div class="cards__image">
						<img :src="item.image" alt="image">
					</div>
					<h3 class="cards__title">{{item.title}}</h3>
					<p class="cards__description description">{{item.description}}</p>
				</div>
			</div>
			<h5 class="difference__subdescription description">Great ideas start with great coffee, Lets help you achieve that                                                                                                                                                               </h5>
			<h3 class="difference__subtitle title">Get started today.</h3>
			<button class="button">Join Us</button>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
	export default {
		name:"DifferenceComponent",
		created () {
			this.loadDifferenceList();
		},
		computed: {
			...mapGetters('differenceItems',['getDifferenceList'])
		},
		methods: {
			...mapActions('differenceItems',['loadDifferenceList'])
		},
	}
</script>

<style lang="scss" scoped>
.difference {

	// .difference__container

	&__container {
		padding-top: 1.87rem; /* 30/16 */
		padding-bottom: 1.87rem; /* 30/16 */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		@media (max-width: 767px) { 
			padding-top: 1rem;
		
			padding-bottom: 1rem;
			padding-left: 0px;
			padding-right: 0px;
		}
	}

	// .difference__title

	&__title {
		text-align: center;
		@media (max-width: 712px) { 
			font-size: 3rem; /* 54/16 */
		}
		@media (max-width: 488px) { 
			font-size: 2.5rem; /* 54/16 */
		}
	}

	// .difference__description

	&__description {
		text-align: center;

	}

	// .difference__cards

	&__cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem; /* 20/16 */
		margin-top: 20px;
		margin-bottom: 24px;
		@media (max-width: 1134px) { 
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 767px) { 
			grid-template-columns: auto;
		}
	}

	// .difference__subdescription

	&__subdescription {
		text-align: center;
	}

	// .difference__subtitle

	&__subtitle {
		font-size: 1.87rem; /* 30/16 */
		text-align: center;
	}
}
.button {

}


.cards {

	// .cards__item
	&__item{
		padding-top: 2.18rem; 
		padding-bottom: 2.18rem;
		border: 1px solid #F9C06A;
		background-color: #FFF9F1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.12rem;
		transition: background-color 0.3s;
		@media (any-hover: hover){
			&:hover{
				background-color: #FFEED8;
			}
		}

	}
	// .cards__image

	&__image {
		font-size: 5.5rem; /* 88/16 */
	}

	// .cards__title

	&__title {
		font-size: 1.75rem; 
		font-weight: 700;
		color: #603809;
	}

	// .cards__description

	&__description {
		text-align: center;
		padding-left: 1rem; /* 30/16 */
		padding-right: 1rem; /* 30/16 */
		line-height: 1.2;

	}
}

</style>