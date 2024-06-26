
import { createStore } from "vuex";
import flavorsItems from './modules/flavorsList';
import differenceItems from './modules/differenceList';
import feedbackItems from './modules/feedbacklist';
import auth from './modules/auth';
import data from './helpers/data';
import cartList from "./modules/cartList";
export default createStore({
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		flavorsItems,
		differenceItems,
		feedbackItems,
		data,
		auth,
		cartList
	},
});
