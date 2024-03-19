<template>
	<transition v-show="currentSlide === index" 
	:name="transitionEffect"  
	class="carousel__item" 
	@mouseover="$emit('mouseenter')"
	@mouseout="$emit('mouseout')">
	
		<div	class="item__content">
			<div class="content__text">
				{{ slideData.text}}
			</div>
			<div class="content__name">
				{{ slideData.name}}
			</div>
			<div class="content__position">
				{{ slideData.position}}
			</div>
			<div class="content__image">
				<img :src="slideData.image" alt="image of worker">
			</div>
		</div>
	</transition>
</template>

<script>

	export default {
		name:'CarouselItem',
		props: {
			slideData: {
				type: Object,
				default: ()=>({})
			},
			currentSlide: {
				type: Object,
				default: ()=>({})
			},
			index: {
				type: Object,
				default: ()=>({})
			},
			direction: {
				type: Object,

			},
		},
		computed: {
			transitionEffect() {
				return this.direction === 'right' ? 'slide-out' : 'slide-in'
			}
		},
		

	}
</script>

<style lang="scss" scoped>
.carousel {

	// .carousel__item

	&__item {
		position: absolute;
		top: 0;
		left: 0;

	}
}
.item {
	
	// .item__content

	&__content {
		padding-top: 8.75rem; 
		padding-bottom: 4rem; 
		background-color: #FFF9F1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		&::after{
			content: "";
			position: absolute;
			background: url(@/assets/images/semicolon.svg) top / cover no-repeat;
			top: 6%;
			left: 3%;
			width: 82px;
			height: 60px;
		}

	}
}
.content {

	// .content__text

	&__text {
		color: #707070;
		font-size: 18px;
		font-weight: 600;
		line-height: 36px;
		padding-left: 6.25rem;
		padding-right: 6.25rem;
		text-align: center;
	}

	// .content__name

	&__name {
		font-size: 2rem;
		font-weight: 700;
		color: #603809;
	}

	// .content__position

	&__position {
		color: #707070;
		font-size: 1.25rem; 
		line-height: 34px;
		font-weight: 400;
		&:not(:last-child){
			margin-bottom: 3.12rem;
		}
	}

	// .content__image

	&__image {
		height: 7rem;
		width: 7rem;
		position: absolute;
		bottom: 0;
		margin-bottom: -5.5%;
		left: calc(50% - 3.5rem);
		z-index: 5;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active{
	transition: all 1s ease-in-out;
}
.slide-in-enter-from{
	transform: translateX(-100%);
}
.slide-in-leave-to{
	transform: translateX(100%);
}
.slide-out-enter-from{
	transform: translateX(100%);
}
.slide-out-leave-to{
	transform: translateX(-100%);
}

</style>