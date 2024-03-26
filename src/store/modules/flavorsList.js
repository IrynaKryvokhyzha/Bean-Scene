import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('flavorsItems')
export default {
	namespaced: true,
	state: () => ({
		flavorsList: [],
		loading: false,
		error: null,
		
	}),
	getters: {
		isLoading: (state) => state.loading,
		hasError: (state) => state.error,

		getFlavorsList: (state) => state.flavorsList,
		getItemById: (state) => (itemId) => state.flavorsList.find((item) => item.id == itemId),
		getFirstFourFlavors: (state) => state.flavorsList.slice(0,4)

	},
	mutations: {
		setItemsList(state, itemsList) {
			state.flavorsList = itemsList
		},

		setLoading(state, value) {
			state.loading = value
		},
		setError(state, error) {
			state.error = error
		},
	},
	actions: {
		loadFlavorsList({ commit }) {
			commit('setError', null)
			commit('setLoading', true)
			collectionDB
					.loadItemsList()
					.then((list) => {
						commit('setItemsList', list)
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
		},

		addItem({ commit, dispatch }, item) {
			commit('setError', null)
			commit('setLoading', true)
			collectionDB
					.addItem(item)
					.then(() => {
						dispatch('loadFlavorsList')
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
		},
		deleteItem({ commit, dispatch }, itemId) {
			commit('setError', null)
			commit('setLoading', true)

			collectionDB
					.deleteItem(itemId)
					.then(() => {
						dispatch('loadFlavorsList')
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
		},
		updateItem({ commit, dispatch }, { itemId, data }) {
			commit('setError', null)
			commit('setLoading', true)

			collectionDB
					.updateItem(itemId, data)
					.then(() => {
						dispatch('loadFlavorsList')
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
		},

		loadFilteredData({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
			commit('setError', null)
			commit('setLoading', true)
			collectionDB
					.loadFilteredData(fieldTitle, compareOperator, valueToCompare)
					.then((list) => {
						commit('setItemsList', list)
					})
					.catch((error) => {
						commit('setError', error)
					})
					.finally(() => {
						commit('setLoading', false)
					})
		},
	},
}


