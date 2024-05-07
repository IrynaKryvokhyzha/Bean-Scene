<template>
	<MainMasterPage>
		<div class="terms__container">
			<h1 class="terms__title-main">Return Policy</h1>
			<h2 class="terms__title title">Online Return Policy</h2>
			<p class="terms__descriptions descriptions">Due to coffee’s perishable nature, we are unable to accept returns due to ordering mistakes. However, we want you to be satisfied with your coffee selection! Be sure to contact us within 15 days of your order date for any problems with your coffee or if you’re not happy with your purchase. Notify us via email at hello@beanscene.com to share your feedback. If there is an error with your order, please contact us so we can get it corrected as soon as possible.</p>
			<p class="terms__descriptions descriptions">For all returns and exchanges on Bean Scene Coffee merchandise, please notify us within 30 days of your order date. All returned Bean Scene Coffee merchandise must have the original packaging, apparel with no visible signs of wear and a valid receipt. Refunds will be issued upon receipt.</p>
			<p class="terms__descriptions descriptions">Discounted items are final sale and cannot be returned. Items purchased online cannot be returned in store. </p>
			<h2 class="terms__title title">Cafe Return Policy</h2>
			<p class="terms__descriptions descriptions">Retail merchandise items can be returned to the location where they were purchased for store credit or full refund within 60 days of purchase. This extends to all Lucky Goat Coffee retail merchandise with original packaging, apparel with no visible signs of wear and a valid receipt. Discounted items are final sale and cannot be returned.</p>

		</div>
	</MainMasterPage>
	
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';

	export default {
		name: 'ReturnPolicy',
		components: {
			MainMasterPage,
		},
	}
</script>

<style lang="scss" scoped>
.terms {

	// .terms__container

	&__container {
		padding-top: 100px;
		font-family: "Playfair Display";
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-size: 18px;
		margin-bottom: 2rem;
		line-height: 2;
	}

	// .terms__header

	&__title-main {
		font-size: 5rem;
		text-align: center;
		color: #603809;
		font-weight: 700;
	}

	// .terms__subheader

	&__subheader {
		color: gray;
	}

	// .terms__descriptions

	&__descriptions {
	}
	
}
h1{
	
}

</style>