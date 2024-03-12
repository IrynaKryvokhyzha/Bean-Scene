
import { createStore } from "vuex";
import flavorsItems from './modules/flavorsList';
import differenceItems from './modules/differenceList';
import data from './helpers/data'
export default createStore({
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		flavorsItems,
		differenceItems,
		data
	},
});
