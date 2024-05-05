<template>
	<section class="subscribe">
		<div class="subscribe__container">
			<h2 class="subscribe__title title">
				Subscribe to get the Latest News
			</h2>
			<h5 class="subscribe__description description">
				Don’t miss out on our latest news, updates, tips and special offers
			</h5>
			<label  for="subscription">
				<input v-model="email" type="email"  name="user-email" id="subscription" placeholder=" Enter your email">
				<button class="button"  @click="subscribe" >Subscribe</button>


				<div class="text-center pa-4">
					<v-dialog
					  v-model="dialog"
					  width="auto"
					>
					  <v-card
						 max-width="400"
						 prepend-icon="mdi-update"
						 text="Thank you for subscribing!."

					  >
						 <template v-slot:actions>
							<v-btn
							  class="ms-auto"
							  text="Close"
							  @click="dialog = false"
							></v-btn>
						 </template>
					  </v-card>
					</v-dialog>
				 </div>
			</label>


			
		</div>
	</section>
</template>

<script>
	export default {
		name:'SubscribeComponent',
		data () {
      return {
      	dialog: false,
			email: ''
      }
   },
	computed: {
		
	},
		methods: {
			validateEmail(email){
			return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
		  },
			subscribe() {
				if (this.validateEmail(this.email)) {
				this.dialog = true;
				this.email=''
				} else {

				alert('Please enter your email before subscribing.');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.subscribe {

	// .subscribe__container

	&__container {
		padding-top: 5.75rem;
		padding-bottom: 5rem;
		position: relative;
		background: url(../assets/images/chance/background.png) right / cover no-repeat;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 25px;

		@media (max-width: 767px) { 
			padding: 4rem 2rem 3.5rem 2rem;
			row-gap: 15px;
		}
		@media (max-width: 450px) { 
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
		&::after{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #481804;
			opacity: 0.8;
		}
	}
	// .subscribe__title

	&__title {
		position: relative;
		text-align: center;
		color: #fff;
		z-index: 5;
		&:not(:last-child) {
			margin-bottom: 0.5rem; /* 33/16 */
		}
		@media (max-width: 767px) { 
			font-size: 2.87rem;
			&:not(:last-child) {
				margin-bottom: 0.1rem; /* 50/16 */
			}
		}
		@media (max-width: 450px) { 
			font-size: 2rem;
		}
	}

	// .subscribe__description

	&__description {
		position: relative;
		color: #fff;
		z-index: 5;
		text-align: center;

	}
}
label{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media (max-width: 450px) { 
		display: flex;
		flex-direction: column;
	}
}
input{
	position: relative;
	padding: 25px 25px;
	margin: 8px 0;
	border: 1px solid #F9C06A;
	border-radius:  5px 0 0 5px;
	box-sizing: border-box;
	z-index: 5;
	height: 4.12rem;
	background-color: #FFF9F1;
	@media (max-width: 767px) { 
		padding: 15px 15px;

	}
	@media (max-width: 450px) { 
		padding: 5px 5px;
		border-radius: 5px;
	}
	&::placeholder{
		color: #a8a3a3;
  		font-size: 20px;
		font-weight: 400;
	}
}
.button {
	position: relative;
	z-index: 5;
	border-radius: 0 5px 5px 0;
	height: 4.12rem;
	font-size: 1.37rem; /* 22/16 */
	@media (max-width: 450px) { 
		border-radius: 5px;
	}
}



</style>