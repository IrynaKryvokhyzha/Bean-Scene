<template>
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
.discover{
	position: relative;
	background-image: url(../assets/images/chance/Rectangle\ 14.png);
	&::after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #481804;
		opacity: 0.5;

	}
}
</style>