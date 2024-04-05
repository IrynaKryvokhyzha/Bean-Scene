<template>
	<main-master-page>
		<div class="contacts__container">
			<div class="contacts-page">
				<div class="contacts-page__header">
					<h1 class="title">Contact us</h1>
					<p class="description">We love hearing from our customers, so grab a cup and tell us what's on your mind</p>
					<p class="description">For the fastest service, you can initiate a live-chat discussion by clicking on the Help button located in the lower right corner of every page.</p>
				</div>
				<div class="contacts-page__email-form">
					<div class="email-form__top">
						<label >
							First Name
							<input type="text">
						</label>
						<label >
							Last Name
							<input type="text">
						</label>
					</div>
					<div class="email-form__bottom">
						<label >
							Email
							<input type="email">
						</label>
						<label >
							How can we help you?
							<textarea   rows="10"></textarea>
						</label>
					</div>
				</div>
				<button class="button">Submit</button>
				<div class="contacts-page__sign-up">
					<div class="sign-up__content">
						<h3 class="content-title">NEVER MISS AN OFFER</h3>
						<p class="content-description description">Sign up for our newsletter and receive 10% off + free shipping on your first order.</p>
					</div>
					<div class="content__button">
						<button class="button">Sign Up</button>
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
		name:'ContactUsView'
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

</style>