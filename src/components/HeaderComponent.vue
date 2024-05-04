<template>
	<header class="header">
		<div class="header__component" >
			<div class="header__logo">
				<a href="">Bean Scene</a>
			</div>
			<div class="header__menu menu">
				<div :class="{'_active':sidebarVisible }" class="menu__icon" @click="showSidebar">
					<span></span>
				</div>
				<nav :class="{'_active':sidebarVisible }" class="menu__body">
					<ul class="menu__list">
						<li class="menu__item"><router-link to="/">Home</router-link> </li>
						<li class="menu__item"><router-link :to="{name: 'menu'}"> Menu </router-link> </li>
						<li class="menu__item"><router-link :to="{name: 'about'}">About Us</router-link></li>
						<li class="menu__item"><router-link :to="{name: 'contact-us'}">Contact Us</router-link></li>
					</ul>
				</nav>
			</div>
			<div class="header__user user">
				<div v-if="getUser" class="user__item">
					<span v-if="getUser.displayName" class="user__name">{{getUser.displayName}}</span>
					<span v-else class="user__name">{{getUser.email}}</span>
					<span v-if="getUser.photoURL">
						<img :src="getUser.photoURL" alt="user logo" class="user__image">
					</span>
					<button class="button" @click="logout" >Logout</button>
				</div>
				<div v-else  class="header__actions">
					<button class="actions__button button" @click="onLogin">Sign In</button>
					<button class="actions__button button" @click="onSignUp">Sign Up</button>
				</div>
				<button class="cart" @click="toCart">
					<font-awesome-icon :icon="['fas', 'cart-shopping']" />
					<span v-if="cartItemCount > 0" class="cart-item-count">{{ cartItemCount }}</span>
				</button>
				<div :class="{ 'cart-component--visible':cartVisible}" class="cart-component">

					<cart-component @close-cart="closeCart"/>
				</div>
				<!-- <button  class="open-filter" @click="toSearch"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
				<button class="cart" @click="toCart"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></button> -->
			</div>
			
		</div>
	</header>
	
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartComponent from '@/components/CartComponent.vue';
	export default {
		name: 'HeaderComponent',
		components: { CartComponent },
		data() {
			return {
				sidebarVisible: false,
				cartVisible: false,

			}
		},
		computed: {
			...mapGetters('auth',['getUser']),
			...mapGetters('cartList',['getCartList']),
			cartItemCount() {
				return this.getCartList.reduce((total, item) => total + item.quantity, 0);
			},
		},
		methods: {
			...mapActions('auth',['logout']),
			showSidebar() {
				this.sidebarVisible = !this.sidebarVisible
				if (this.sidebarVisible) {
       			 document.body.classList.add('no-scroll');

				} else {
					document.body.classList.remove('no-scroll');
				}
			},
			onLogin(){
				this.$router.push({
					name: 'login'
				})
			},
			onSignUp(){
				this.$router.push({
					name: 'sign-up'
				})
			},
			toCart(){
			this.cartVisible = true
			
			// this.applyScrollStyles()
		  },
		  closeCart(){
			this.cartVisible= false
		},
	
	}
	}
</script>

<style lang="scss" scoped>
.button {
	background-color: transparent;
	color: #fff;
	@media (any-hover: hover){
		&:hover{
			background-color: #efb257;
			color: #000;
			
		}
	}
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 50;
	// .header__container

	&__component {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		//gap: toRem(16);
		padding: 0rem 5rem;
		align-items: center;
		font-weight: 500;
		color: #fff;
		background-color: rgba(8, 8, 6, 0.9);
		@media (max-width: 991px) {
			padding-right: 4rem;
			padding-left: 4rem;
		}
		@media (max-width: 790px) {
			padding-right: 2rem;
			padding-left: 2rem;
		}
	}

	// .header__logo

	&__logo {
		font-family: 'Clicker Script';
		font-weight: 400;
		align-items: center;
		@media (max-width: 767px) {
			display: none;
		}
	}

	// .header__menu

	&__menu {

	}

	// .header__actions

	&__actions {
		display: flex;
		flex-direction: row;
	
		
	}
}
.menu {

	//.menu__icon
	&__icon {
		display: none;
		
	}
	// .menu__body

	&__body {

	}

	// .menu__list

	&__list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		//column-gap: toRem(60); 
		column-gap: 3.75rem; /* 60/16 */
		row-gap: 1rem;
	
		@media (max-width: 970px) { 
			column-gap: 2rem;
		}
		@media (max-width: 890px) { 
			column-gap: 1rem;
		}
	}

	// .menu__item

	&__item {
		flex: 1 1 auto;
		@media (any-hover: hover){
			&:hover{
				text-decoration: underline;
			}
		}
		
	}
}
.actions {

	// .actions__button

	
}

// Burger menu

@media (max-width: 767px) { 
	.menu__list{
		align-items: flex-start;
		flex-direction: column;
	}
	.menu__list > li{
		padding: 10px 0;
		font-size: 1.5rem; /* 24/16 */

	}
	.menu__icon{
		display: block;
		z-index: 5;
		position: relative;
		width: 1.87rem; /* 30/16 */
		height: 1.12rem; /* 18/16 */
		cursor: pointer;
	}
	.menu__icon span,
	.menu__icon::before,
	.menu__icon::after{
		left: 0;
		position: absolute;
		width: 100%;
		height: 10%;
		background-color: #fff;
		transition: all 0.3s ease 0s;
	}
	//три полосочки меню

	.menu__icon::before,
	.menu__icon::after{
		content: "";
	}
	.menu__icon::before{
		top: 0;
	}
	.menu__icon::after{
		bottom: 0;
	}
	.menu__icon span{
		top: 50%;
		transform: scale(1) translate(0px,-50%);
	}
	.menu__body{
		position: fixed;
		overflow: auto;
		left: -100%;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 100px 30px 30px 30px;
		background-color: black;
		transition: left 0.5s ease 0s;
	}
	.menu__body._active{
		left: 0;
	}
	.menu__icon._active span{
		transform: scale(0) translate(0px,-50%);
	}
	.menu__icon._active::before{
		top: 50%;
		transform: rotate(-45deg) translate(0px,-50%);
	}
	.menu__icon._active::after{
		bottom: 50%;
		transform: rotate(45deg) translate(0px,50%);
	}
}
.user {
	display: flex;
	
	
		// .user__item
	
		&__item {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 10px;
			align-items: center;
			
		}
	
	
		// .user__name
	
		&__name {
			align-self: center;
			@media (max-width: 991px) {
				display: none;
				
			}
		}
	
		// .user__image
	
		&__image {
			border-radius: 50%;
			align-items: center;
			width: 40px;
			height: 40px;
			aspect-ratio: 1/2;
	
			@media (max-width: 991px) {
				display: none;
			}
			img{
				width: 100%;
			}
		}
		// .user__login-icon
	
		&__login-icon {
			@media (min-width: 767.98px) {
				display: none;
			}
		}
	}
	.cart {
		align-self: center;
		padding-left: 10px;
		position: relative; 
		@media (any-hover: hover){
			&:hover{
				color: #efb257;
				
				
			}
		}
	 }
	 
	 .cart-item-count {
		position: absolute;
		top: -8px;
		right: -8px;
		background-color: red;
		color: white;
		border-radius: 50%;
		padding: 4px;
		font-size: 12px;
	 }
</style>