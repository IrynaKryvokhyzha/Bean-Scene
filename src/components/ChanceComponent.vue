<template>
	<div>
		<text-image-data-component>
			<template #title >
				<h2 class="content__title title">
					{{ title }}
				</h2>
				
			</template>
			<template #description>
				<p class="content__description description">
					{{ description }}
				</p>
			</template>
			<template #button >
				<button class="content__button button">
					{{ buttonTitle }}
				</button>
			</template>
			<template #image>
				<div class="section__image-ibg-contain">
					<img :src="image" alt="cup of coffee beans">
				</div>
			</template>
		</text-image-data-component>
		<ul class="flex-container">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		 </ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import TextImageDataComponent from './TextImageDataComponent.vue'
	export default {
		name:'ChanceComponent',
		components: { TextImageDataComponent },
		data() {
			return {
				title: 'Get a chance to have an Amazing morning',
				description: 'We are giving you are one time opportunity to experience a better life with coffee.',
				buttonTitle: 'Order Now',
				image: require('@/assets/images/chance/cup.png')
			}
		},
		methods: {
			...mapGetters(['getChanceList'])
		},
	}
</script>

<style lang="scss" scoped>
.flex-container{
	display: inline;
}
.section__image-ibg-contain{

}
</style>