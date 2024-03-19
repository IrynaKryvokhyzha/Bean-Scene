<template>
	<header class="header">
		<div class="header__container" >
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
			<div class="header__actions">
				<button class="actions__button button">Sign In</button>
				<button class="actions__button button">Sign Up</button>
			</div>
		</div>
	</header>
	
</template>

<script>
	export default {
		name: 'HeaderComponent',
		data() {
			return {
				sidebarVisible: false
			}
		},
		methods: {
			showSidebar() {
				this.sidebarVisible = !this.sidebarVisible
				if (this.sidebarVisible) {
       			 document.body.classList.add('no-scroll');

				} else {
					document.body.classList.remove('no-scroll');
				}
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

	&__container {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		//gap: toRem(16);
		align-items: center;
		font-weight: 500;
		color: #fff;
		background-color: rgba(4, 4, 3, 0.3);
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

</style>