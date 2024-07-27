<template>
  <div class="payment__container">
    <div class="content">
      <stripe-card-component class="stripe" :onTotalPrice="totalPrice" />
      <cart-component class="cart" @update-total-price="updateTotalPrice" />
    </div>
  </div>
</template>

<script>
import CartComponent from "./cart/CartComponent.vue";
import StripeCardComponent from "./StripeCardComponent.vue";

export default {
  name: "PaymentComponent",
  components: {
    StripeCardComponent,
    CartComponent,
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    updateTotalPrice(newTotalPrice) {
      this.totalPrice = newTotalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.payment__container {
  @media (max-width: 768px) {
    padding: 0;
  }
}
.content {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  @media (max-width: 1003px) {
    grid-template-columns: 1fr;
  }
}
.stripe {
  height: 300px;
}
.cart {
  padding: 0 10px;
}
</style>
