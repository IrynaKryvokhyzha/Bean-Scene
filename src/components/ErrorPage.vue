<template>
	<div class="error__container">
		<h2 >Oops! Something went wrong!</h2>
		<font-awesome-icon :icon="['fas', 'bug']" class="icon" />
		<v-btn class="button" @click="onClick">Home</v-btn>
	</div>
</template>

<script>
	export default {
		name: 'ErrorPage',
		methods: {
			onClick() {
				this.$router.push({
					name: 'home'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.error {

	// .error__container

	&__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 50px;
		gap: 30px;
	}
}
h2{
	align-self: center;
	font-size: 2rem;
}
.icon {
	color:  #c88b30;
	font-size: 5rem;
}
.button {
	width: 200px;
	align-self: center;
	background-color: #F9C06A;
	transition: background-color 0.3s;
	color: #603809;
	border-radius: 30px;
	@media (any-hover: hover){
		&:hover{
			background-color: #ffd391;
			
		}
	}
}
</style>