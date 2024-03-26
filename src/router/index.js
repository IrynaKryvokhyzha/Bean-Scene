import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
	path: "/menu",
	name: "menu",
	component: () =>
	  import(/* webpackChunkName: "menu" */ "../views/MenuView.vue"),
 },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
	path: "/contact-us",
	name: "contact-us",
	component: () =>
	  import(/* webpackChunkName: "contact-us" */ "../views/ContactUsView.vue"),
 },
 {
	path: "/menu/coffee-item",
	name: "coffee-item",
	component: () =>
	  import(/* webpackChunkName: "coffee-item" */ "../components/flavors/FlavorsItem"),
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
