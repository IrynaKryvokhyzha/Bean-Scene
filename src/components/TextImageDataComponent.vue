<template>
	<section class="discover">
		<div class="discover__container">
			<div class="discover__section section">
				<div class="section__content content">
					<slot name="title">
						<h2 class="content__title title">
							
						</h2>
					</slot>
					<slot name="description">
						<p class="content__description description">
							
						</p>
					</slot>
					<slot name="button">
						<button class="content__button button">
							
						</button>
					</slot>
				</div>
				<slot name="image">
					<div class="section__image-ibg-contain">
						
					</div>
				</slot>
			</div>
		</div>
		
	</section>
</template>

<script>
	export default {
		name:'TextImageDataComponent',
		props: {
			info: {
				type: Array,
				required: true,
			},
			defaultImage:{
				type: String,
				default: '../assets/images/beans_cup.png'
			} 
		},
	}
</script>

<style lang="scss" scoped>

</style>