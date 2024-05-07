<template>
	<main-master-page>
		<div class="contacts__container">
			<div class="contacts-page">
				<div class="contacts-page__header">
					<transition appear name="fade">
						<h1 class="title">Contact us</h1>
					</transition>
					<transition appear name="paragraph">
						<p class="description">We love hearing from our customers, so grab a cup and tell us what's on your mind</p>
					</transition>
					<transition appear name="fade">
						<p class="description">For the fastest service, you can initiate a live-chat discussion by clicking on the Help button located in the lower right corner of every page.</p>
					</transition>
				</div>
				<div class="contacts-page__email-form">
					<div class="email-form__top">
						<label >
							First Name
							<input v-model="firstName" type="text">
						</label>
						<label >
							Last Name
							<input v-model="lastName" type="text">
						</label>
					</div>
					<div class="email-form__bottom">
						<label >
							Email
							<input v-model="email" type="email">
						</label>
						<label >
							How can we help you?
							<textarea v-model="message"  rows="10"></textarea>
						</label>
					</div>
				</div>
				<button class="button" @click="subscribe">Submit</button>

				<div class="text-center pa-4">
					<v-dialog v-model="dialog" width="auto">
					<v-card max-width="800" prepend-icon="mdi-update" class="text-center" 
						title="Thank you!"
						text="Your submission has been received. A member of our staff will contact you shortly." >
						<template v-slot:actions>
							<v-btn class="ms-auto" text="Close" @click="dialog = false"
							></v-btn>
						</template>
					</v-card>
					</v-dialog>
				</div>

				<div class="contacts-page__sign-up">
					<div class="sign-up__content">
						<h3 class="content-title">NEVER MISS AN OFFER</h3>
						<p class="content-description description">Sign up for our newsletter and receive 10% off + free shipping on your first order.</p>
					</div>
					<div class="content__button">
						<button class="button" @click="onSignUp">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	</main-master-page>
</template>

<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
	export default {
		name:'ContactUsView',
		components: { MainMasterPage },
		data () {
      return {
      	dialog: false,
			firstName: '',
			lastName: '',
			email: '',
			message: ''
			}
		},
 		
		
		methods: {
			validateEmail(email){
			return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
		},
			subscribe() {
				if (this.validateEmail(this.email)) {
				this.dialog = true;
				this.email=''
				this.firstName=''
				this.lastName=''
				this.message=''
				} else {

				alert('Please enter your email before submitting.');
				}
			},
			onSignUp(){
				this.$router.push({
					name: 'sign-up'
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
input,
textarea{
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: flex;
	border: 1px solid #6b6a6a;
	border-radius: 5px;
	box-sizing: border-box;
}

.contacts {

	// .contacts__container

	&__container {
		padding-top: 8rem;
		@media (max-width: 767px) {
			padding:  5rem 1rem 0 1rem;
		}
	}
}
.contacts-page {

	// .contacts-page__header

	&__header {
		&:not(:last-child){
			margin-bottom: 3rem;
		}
		@media (max-width: 360px) { 
			&:not(:last-child){
				margin-bottom: 2rem;
			}
		}
	}

	// .contacts-page__email-form

	&__email-form {
		&:not(:last-child){
			margin-bottom: 3rem;
		}
	}

	// .contacts-page__sign-up

	&__sign-up {
		padding: 2rem 0;
		display: flex;
		flex-direction: row;
		gap: 5rem;
		@media (max-width: 767px) {
			flex-direction: column;
			gap: 1.5rem;
		}
	}
}
.title {
	font-size: 5rem;
	text-align: center;
	@media (max-width: 550px) { 
	font-size: 4rem;
	}
	@media (max-width: 360px) { 
		font-size: 3rem;
		}
}
.description {
	text-align: start;
	@media (max-width: 767px) {
		text-align: start;
		line-height: 1.5rem;
	
		}
}

.email-form {

	// .email-form__top

	&__top {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		@media (max-width: 767px) {
			grid-template-columns: auto;
		}
	}

}

.sign-up {

	// .sign-up__content

	&__content {
		flex: 0 1 65%;
		
	}
}
.content-title{
	font-size: 2rem; /* 54/16 */
	color: #603809;
	font-weight: 700;
	line-height: 1.2;

}

.content__button{
	align-self: center;
	@media (max-width: 767px) {
	align-self: flex-start;

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

.paragraph-enter-from{
	opacity: 0;
	transform: translateX(300px);
}
.paragraph-enter-active{
	transition: all 5s ease;
}
</style>