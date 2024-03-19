<template>
<main-master-page>
<coffee-component/>
<discover-component/>
<flavors-list/>
<difference-component/>
<chance-component/>
<feedback-component/>
</main-master-page>
</template>

<script>
import ChanceComponent from '../components/ChanceComponent.vue';
import CoffeeComponent from '../components/CoffeeComponent.vue';
import DifferenceComponent from '../components/DifferenceComponent.vue';
import DiscoverComponent from '../components/DiscoverComponent.vue';
import FeedbackComponent from '../components/FeedbackComponent.vue';
import FlavorsList from '../components/FlavorsList.vue';
import MainMasterPage from '../masterpages/MainMasterPage.vue';
// @ is an alias to /src


export default {
  name: "HomeView",
  components: { MainMasterPage, CoffeeComponent, DiscoverComponent, FlavorsList, DifferenceComponent, ChanceComponent, FeedbackComponent},

};
</script>
<style lang="scss" scoped>

</style>