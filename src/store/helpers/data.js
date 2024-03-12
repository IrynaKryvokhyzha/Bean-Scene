

export default({
    namespaced: true,
    state: {
		chanceList:
			{
			title:'Get a chance to have an Amazing morning',
			description: 'We are giving you are one time opportunity to experience a better life with coffee.',
			buttonTitle: 'Order Now',
			image:'.../assets/images/coffee_image.jpg'
		},

	
	 },
	 getters:{
		getChanceList: (state)=>state.chanceList
	 }
	
	})