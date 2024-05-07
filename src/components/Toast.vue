<template>
	<div class="toast-wrapper">
		<div class="toast">
			{{ text }}
		</div>

	</div>
</template>

<script>
	export default {
		name:'Toast'
	}
</script>

<style lang="scss" scoped>
.toast-wrapper {
	position: fixed;
	width: 100%;
	top: 50px;
}
.toast {
	padding: 20px;
	color: white;
	background-color: red;
	border-radius: 10px;
	max-width: 400px;
	margin: 0 auto;
}

</style>