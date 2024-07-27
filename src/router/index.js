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
    path: "/sign-up",
    name: "sign-up",
    // meta: {
    // 	requireAuth: false,
    //  },
    component: () =>
      import(
        /* webpackChunkName: "sign-up" */ "../components/Login/SignUpPage"
      ),
  },
  {
    path: "/login",
    name: "login",
    // meta: {
    // 	requireAuth: false,
    //  },
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login/LoginPage"),
  },
  {
    path: "/terms-of-use",
    name: "terms-of-use",
    // meta: {
    // 	requireAuth: false,
    //  },
    component: () =>
      import(
        /* webpackChunkName: "terms-of-use" */ "../components/TermsComponent.vue"
      ),
  },
  {
    path: "/return-policy",
    name: "return-policy",
    // meta: {
    // 	requireAuth: false,
    //  },
    component: () =>
      import(
        /* webpackChunkName: "return-policy" */ "../components/ReturnPolicy.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../components/ErrorPage.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    // meta: {
    // 	requireAuth: false,
    //  },
    component: () =>
      import(
        /* webpackChunkName: "payment" */ "../components/PaymentComponent.vue"
      ),
  },
  {
    path: "/payment-success",
    name: "payment-success",
    // meta: {
    // 	requireAuth: false,
    //  },
    component: () =>
      import(
        /* webpackChunkName: "payment" */ "../components/PaymentSuccess.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
