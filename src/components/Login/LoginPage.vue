<template>
		<main>
			<section class="login__container">
				<form class="login__item item">
					<h1 class="item__header title">Login</h1>
					<h2 class="item__sign-in description"> Doesn't have an account yet? <button class="login-button-underlined" @click="onSignUp">Sign Up</button></h2>
					<span class="item__message">{{message}}</span>
					<div class="login-form">
						<label>
							Email
							<input v-model="email" type="email" :placeholder="email" autocomplete="on" >
						</label>
						<label>
							Password
							<input v-model="password" type="password" :placeholder="password" autocomplete="on">
						</label>
					</div>
					<button class="item__button button" @click="onLogin" :disabled='!isDataValid'> Login</button>
					<span>or</span>
					<button class="item__button button google-button" @click="onLoginWithGoogle" > login with Google </button>
					<button class="item__button button" @click="onHome">Home</button>
				</form>
			</section>
		</main>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		name:'LoginPage',
		data() {
			return {
				email: '',
				password: '',
				message: ''
			}
		},
		computed: {
			isDataValid() {
				return this.email && this.password
			}
		},
		methods: {
			...mapActions('auth',['loginWithGoogle','signInWithWithEmailAndPassword']),
			onLoginWithGoogle(){
				this.loginWithGoogle()
				this.$router.push({
					name: 'home'
				})
			},
			onHome(){
				this.$router.push({
					name: 'home'
				})
			},
			onSignUp(){
				this.$router.push({
					name: 'sign-up'
				})
			},

			validateEmail(email){
			return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
		  },
		  validatePassword(password){
			return password.length >= 6
		  },
		  
			onLogin() {
				if (!this.validateEmail(this.email)){
				this.message = "❌ Please enter a valid email address"
			}
			else if	(!this.validatePassword(this.password)){
				this.message =  "❌ Password should have 6 or more digits"
			}
			else {
				this.message = ''
			this.signInWithWithEmailAndPassword({email: this.email, password: this.password})
			.then(() => {
				
				// this.$router.push({
				// 	name: 'home'
				// })
			})
			}
			},  
		},
	}
</script>

<style lang="scss" scoped>

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
.item__google-button{
	

}
.icon{
	//background-image: url('');
	background-size: 25px 25px;
	background-position: 5px 5px;
	z-index: 5;
}
.login {

	// .login__container

	&__container {
		padding-top: 15px;
		//max-width: 600px;
	}

	// .login__item

	&__item {

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