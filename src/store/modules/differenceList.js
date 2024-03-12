import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('differenceItems')
export default {
	namespaced: true,
	state: () => ({
		differenceList: [],
		loading: false,
		error: null,
		
	}),
	getters: {
		isLoading: (state) => state.loading,
		hasError: (state) => state.error,

		getDifferenceList: (state) => state.differenceList,
		getItemById: (state) => (itemId) => state.differenceList.find((item) => item.id == itemId),


	},
	mutations: {
		setItemsList(state, itemsList) {
			state.differenceList = itemsList
		},

		setLoading(state, value) {
			state.loading = value
		},
		setError(state, error) {
			state.error = error
		},
	},
	actions: {
		loadDifferenceList({ commit }) {
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
						dispatch('loadDifferenceList')
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
						dispatch('loadDifferenceList')
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
						dispatch('loadDifferenceList')
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


