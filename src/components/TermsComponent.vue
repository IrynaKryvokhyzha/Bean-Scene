<template>
	<MainMasterPage>
		<div class="terms__container">
			<h1 class="terms__title title">TERMS OF USE</h1>
			<h3 class="terms__subheader">Last revised:  November, 2020</h3>
			<p class="terms__descriptions descriptions">These Terms of Use (“Terms of Use”) apply to your access to and use of the websites, mobile applications and other online products and services (collectively, our “Services”) provided by International Coffee & Tea, LLC d/b/a The Coffee Bean & Tea Leaf® (the “Company”).These terms do not apply to any third-party sites not owned and operated by Company, including certain franchisee sites, which may have their own terms and conditions that govern their services. You visit such third-party sites at your own risk.  Company has no responsibility for the content, policies or actions of any third-party sites and does not sponsor, endorse, affiliate or associate with any materials displayed on or accessible through such third-party sites.</p>
			<p class="terms__descriptions descriptions">By clicking to indicate your acceptance of these Terms of Use, or otherwise accessing or using our Services, you agree and accept the Terms of Use, as described below and all terms incorporated by reference. If you do not agree to these Terms of Use, please do not use our Services or order, receive, or use products made available through the Services (collectively, the “<em>Products</em>”). <em>If you do not agree to these Terms of Use, including the mandatory arbitration provision and class action waiver in Section 17, do not access or use our Services or order, receive or use products made available through the Services.</em></p>
			<p class="terms__descriptions descriptions">Company reserves the right, at its sole discretion, to change, modify or otherwise alter these Terms of Use at any time. If we make changes to these Terms of Use, we will provide notice of such changes, such as by sending an email notification, providing notice through our Services, posting the amended Terms of Use to our Services and updating the “Last revised” date above. Such changes and/or modifications shall become effective immediately upon being posted in these pages. Please review the Terms of Use periodically. If you continue to use the Services following the posting of changes and/or modifications, it will constitute your acceptance of the revised Terms of Use. If you do not agree to the amended Terms of Use, you must stop accessing and using our Services.</p>
			<p class="terms__descriptions descriptions">Additionally, Company may at any time, for any reason, and without notice or liability: (1) modify, suspend or terminate operation of or access to the Services, or any portion thereof; (2) change, revise or modify the Services, or any portion thereof; (3) interrupt the operation of the Services or any portion thereof for maintenance and support;(4) impose limits on certain features and services, or restrict access to the Services; and/or (5) terminate the authorization, rights and license given above. Upon any termination of the Services or these Terms of Use, the rights and licenses granted to you herein shall terminate and you must cease all use of the Services.</p>

		</div>
	</MainMasterPage>
	
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';

	export default {
		name: 'TermsComponent',
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

	&__title {
	}

	// .terms__subheader

	&__subheader {
		color: gray;
	}

	// .terms__descriptions

	&__descriptions {
	}
	
}


</style>