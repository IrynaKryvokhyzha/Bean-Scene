import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import icons */
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(fab, fas, far);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

//Stripe
// import VueStripe from "@stripe/vue-stripe";

// const stripePromise = loadStripe(
//   "pk_test_51PhBO4J5pcBTFCzheuc2ZKJoxpy3BoalDAG4jwQAhqCSHemUUSnMhvgq2PPS1nLIxmZQdEXkRQx4OhxG0R1Exzyy00lIPZiZ8C"
// );

const app = createApp(App);
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(vuetify);
// app.use(VueStripe, {
//   pk: stripePromise,
//   stripeAccount: "optional-stripe-account-id",
// });
app.mount("#app");
