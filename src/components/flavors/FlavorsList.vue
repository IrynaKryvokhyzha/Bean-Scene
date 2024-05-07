<template>
	<section class="flavors">
		<div class="flavors__container">
			<slot name="header">
				
			</slot>
	
			<transition-group appear tag="div" name="list" class="flavors__list">
				<div  v-for="item in getFlavorsList" :key="item.id" class="flavors__items" >
					<div class="flavors__item item">
						<div class="item__image-ibg-contain">
							<img :src="item.image" alt="image">
						</div>
						<div class="item__content">
							<h4 class="item__content-title title">
								{{ item.title }}
							</h4>
							<div class="item__content-composition">
								{{ item.coffee }}{{ percent }} | {{ item.milk }}{{ percent }}
							</div>
							<div class="item__content-price">$ {{item.price}}</div>
						</div>
					</div> 
					<button class="button" @click="addItemToCart(item.id)">Order Now</button>
				</div>
			</transition-group>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
	export default {
		name:"FlavorsList",
		props: {
			getFlavorsList: {
				type: Array, 
				required: true 
			}
		},
		data() {
			return {
				percent: '%'
			}
		},
		
	
		computed: {
			...mapGetters ('flavorsItems',['getFlavorsList', 'isLoading', 'hasError']),
			
		},
		watch: {
		error(newValue) {
			if (newValue){
				this.$router.push({
				name:'error'
			})
			}
			
		}
	 },
		created () {
			this.loadFlavorsList()

		},
		methods: {
			
			...mapActions('flavorsItems', ['loadFlavorsList']),
			...mapActions('cartList',[ 'addItemToCart']),
		},
		
	}
</script>

<style lang="scss" scoped>
.flavors {

	// .flavors__container

	&__container {
		margin-bottom: 1.87rem;
		@media (max-width: 767px) { 
			padding-left: 0px; 
			padding-right: 0px; 
		}
	}


	// .flavors__list

	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem; /* 20/16 */
	
		@media (max-width: 991px) { 
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 767px) { 
			grid-template-columns: auto;
		}

	}
	// .flavors__items

	&__items {
		display: flex;
		flex-direction: column;
		
	}
	// .flavors__item

	&__item {
		
	}
}
.title {
	text-align: center;
	
}
.description {
	text-align: center;

}
.item {
border: 1px solid #F9C06A;
overflow: hidden;
	// .item__image

	&__image-ibg-contain {
		padding-bottom: 79%;
		object-fit: cover;
	
		img{
			transition: scale 0.3s;
			@media (any-hover: hover){
				&:hover{
				scale: 1.1;
				}
			}
		}
	}

	// .item__content

	&__content {
		background-color: #FFF9F1;
		padding-top: 1.5rem;
	}

	// .item__content-title

	&__content-title {
		font-size: 1.37rem; /* 22/16 */
		text-transform: capitalize;
		&:not(:last-child) {
			margin-bottom: 0.62rem; /* 10/16 */
		}
	}

	// .item__content-composition

	&__content-composition {
		text-align: center;
		color: #1E1E1E;
		&:not(:last-child) {
			margin-bottom: 0.62rem; /* 10/16 */
		}
	}

	// .item__content-price

	&__content-price {
		color: #603809;
		font-size: 1.12rem; /* 18/16 */
		font-weight: 700;
		text-align: center;
		padding-bottom: 2.86rem; /* 43/16 */

	}
}
.button {
	margin-top: -25px; 
	align-self: center;
}
.loader{
	text-align: center;
}
// list transition
.list-enter-from{
	opacity: 0;
	transform: scale(0.6);
}
.list-enter-to{
	opacity: 1;
	transform: scale(1);
}
.list-enter-active{
	transition: all 2s ease;
}

</style>