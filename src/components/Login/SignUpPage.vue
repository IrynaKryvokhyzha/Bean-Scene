<template>
	<main>
		<section class="login__container">
			<form class="login__item item">
				<h1 class="item__header title">Sign Up</h1>
				<span class="item__message">{{message}}</span>
				<div>
					<label>
						Email
						<input v-model="email" type="email" :placeholder="email" autocomplete="on" >
					</label>
					<label>
						Password
						<input v-model="password" type="password" :placeholder="password" autocomplete="on">
					</label>
				</div>
				<button class="item__button button" @click="registerWithEmailAndPassword" :disabled='!isDataValid'>  Sign Up</button>
				<span>Already a user ? <button @click="onLogin" class="login-button-underlined">Login</button></span>
				<button class="item__button button" @click="onHome">Home</button>
			</form>
		</section>
	</main>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex'

	export default {
		name: 'SignUpPage',
		data() {
			return {
				email: '',
				password: '',
				message: '',
			}
		},
		computed: {
			...mapGetters('auth',['getUser']),
			isDataValid() {
				return this.email && this.password
			},
		},
		methods: {
			...mapActions('auth',[ 'signUpWithWithEmailAndPassword', 'signInWithWithEmailAndPassword']),
			onHome(){
				this.$router.push({
					name: 'home'
				})
			},
			onLogin(){
			this.$router.push({
				name: 'login'
			})
		  },

		  validateEmail(email){
			return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
		  },
		  validatePassword(password){
			return password.length >= 6
		  },
		  registerWithEmailAndPassword() {
			if (!this.validateEmail(this.email)){
				this.message = "❌ Please enter a valid email address"
			}
			else if	(!this.validatePassword(this.password)){
				this.message = "❌ Password should have 6 or more digits"
			}
			else {
				this.signUpWithWithEmailAndPassword({email: this.email, password: this.password })
				this.$router.push({
					name: 'home'
					})
			}
		},  
		},
	}
</script>

<style lang="scss" scoped>

label{
	align-self: center;

}
input{
	padding: 1.5rem 1.5rem;
	margin: 8px 0;
	border: 1px solid #F9C06A;
	border-radius:  5px;
	box-sizing: border-box;
	height: 2rem;
	width: 100%;

	&::placeholder{
		color: #a8a3a3;
  		font-size: 20px;
		font-weight: 400;
	}
}
.item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 10px;
		// .item__header
	
		&__header {
			font-size: 3rem;
			font-weight: 700;
			padding-bottom: 10px;
		}
	
		// .item__sign-in
	
		&__sign-in {
		}
	
		// .item__message
	
		&__message {
			color: red;
			padding: 0 20px;
			text-align: center;
			line-height: 1.2;
		}
	}
	
	.login-button-underlined {
		text-decoration: underline;
		color: #d68121;
		@media (any-hover: hover){
			&:hover{
				color: #e7ab51;
				
			}
		}
	}
</style>