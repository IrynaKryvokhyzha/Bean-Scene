<template>
	<div class="control">
		<button class="carousel-control left" @click="$emit('prev')"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
		<button class="carousel-control right" @click="$emit('next')"><font-awesome-icon :icon="['fas', 'arrow-right']"/></button>
	</div>

</template>

<script>
	export default {
		name: 'CarouselControls'
	}
</script>

<style lang="scss" scoped>

.control {

}

.carousel-control {
	//display: inline-block;
	position: absolute;
	top: calc(50% - 41px);
	height: 82px;
	width: 82px;
	box-shadow: 0 6px 12px 0 rgba(249,192,106,.22);
	border-radius: 16px;
	color: #000;
	transition: background-color 0.3s;
	background-color: #F9C06A;
	z-index: 5;
	@media (any-hover: hover){
		&:hover{
			background-color: #ffd391;
			
		}
	}
}
.left {
	left: -10px;
}
.right {
	right: -10px;
}

</style>