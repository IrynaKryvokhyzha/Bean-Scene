<template>
		<section class="cart__container">
			<article  class="cart-page page  ">
				<button  class="close-cart-button" @click="closeCart"><font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
				<h2>Cart</h2>
				<div v-for="itemId in getCartList" :key="itemId" class="page__item">
					<div class="cart__products products">
						
						<div class="products__products-image">
							<img :src="getItemImage(itemId.id)" alt="product image">
						</div>
						<div class="products__product-content content-product">
							<div class="content-product__title">{{getItemTitle(itemId.id)}}</div>
							<!-- Зробити кнопки + та - щоб кількість коригувати -->
							<div >Quantity: {{itemId.quantity}}</div>
							<!-- <div class="content-product__price">	{{getCurrentPrice(getItemPriceWithQuantity(itemId.id))}} {{ getCurrencyTitle }} </div> -->
							<div class="content-product__item-price">({{getItemPrice(itemId.id)}} $ / item) </div>
							<button class="button-remove"	variant="text" @click="rejectItem(itemId.id)"> Remove	</button>
						</div>
					</div>
				</div>
				<div class="page__actions">
					<div class="subtotal">Subtotal: {{getTotalPrice()}} $ </div>
				</div>
				<div class="page__checkout-buttons">
					<button class="button-white" @click="closeCart">Keep Shopping</button>
					<button class="button-white">Checkout</button>
				</div>
			</article> 
		</section> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name:'CartComponent',
		
	 computed: {
		...mapGetters('flavorsItems',['getFlavorsList', 'getItemById']),
		...mapGetters('cartList',['getCartList', 'getItemById']),

		
	 },

	
	 methods: {

		...mapActions('cartList',['loadCartList', 'rejectItem']),
		
		closeCart(){
			this.$emit('close-cart')
		},
		getItemImage(itemId){
			const flavor = this.getFlavorsList.find((item) => item.id == itemId)
			
			if (flavor) {
				return flavor.image;            
			} else {
				return require('@/assets/images/flavors/latte.png')
			}
		},
		getItemTitle(itemId){
			const flavor = this.getFlavorsList.find((item) => item.id == itemId)
			
			if (flavor) {
				return flavor.title;            
			} else {
				return ''
			}
		},
		getItemPrice(itemId){
			const flavor = this.getFlavorsList.find((item) => item.id == itemId)
			
			if (flavor) {
				return flavor.price;            
			} else {
				return ''
			}
		},
		getItemPriceWithQuantity(itemId){
			const cartItem = this.getItemById(itemId)
			return this.getItemPrice(itemId) * cartItem.quantity
		},

		getTotalPrice() {
		return this.getCartList.reduce((totalPrice, item) => {
			const price = this.getItemPriceWithQuantity(item.id)

			return totalPrice + price;
			
				},0);
			}

	}
	}
</script>

<style lang="scss" scoped>

.button-remove {
	align-self: start;
	text-decoration: underline;
	transition: all 0.3s;
	align-self: flex-end;
	@media (any-hover: hover){
		&:hover{
			text-decoration: none;
		}
	}

}
h2{
	font-size: 24px;
}
.button-white {
	border: 2px solid #603809;
	padding: 20px 50px;
	border-radius: 30px;
	text-transform: uppercase;
	transition: all 0.3s;
	@media (any-hover: hover){
		&:hover{
			background-color: #ffd391;
			color: #603809;
		}
	}

}
</style>