<template>
  <section class="cart__container">
    <article class="cart-page page">
      <button class="close-cart-button" @click="closeCart">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>
      <h2>Cart</h2>
      <CartComponent />
      <div class="page__checkout-buttons">
        <button class="button-white" @click="closeCart">Keep Shopping</button>
        <button class="button-white" @click="onCheckout">Checkout</button>
      </div>
    </article>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartComponent from "./CartComponent.vue";

export default {
  name: "CartManager",
  components: {
    CartComponent,
  },
  computed: {
    ...mapGetters("flavorsItems", ["getFlavorsList", "getItemById"]),
    ...mapGetters("cartList", ["getCartList", "getItemById"]),
  },

  methods: {
    ...mapActions("cartList", ["loadCartList", "rejectItem"]),
    onCheckout() {
      this.$router.push({
        name: "payment",
      });
    },
    closeCart() {
      this.$emit("close-cart");
    },
    getItemImage(itemId) {
      const flavor = this.getFlavorsList.find((item) => item.id == itemId);

      if (flavor) {
        return flavor.image;
      } else {
        return require("@/assets/images/flavors/latte.png");
      }
    },
    getItemTitle(itemId) {
      const flavor = this.getFlavorsList.find((item) => item.id == itemId);

      if (flavor) {
        return flavor.title;
      } else {
        return "";
      }
    },
    getItemPrice(itemId) {
      const flavor = this.getFlavorsList.find((item) => item.id == itemId);

      if (flavor) {
        return flavor.price;
      } else {
        return "";
      }
    },
    getItemPriceWithQuantity(itemId) {
      const cartItem = this.getItemById(itemId);
      return this.getItemPrice(itemId) * cartItem.quantity;
    },

    getTotalPrice() {
      return this.getCartList.reduce((totalPrice, item) => {
        const price = this.getItemPriceWithQuantity(item.id);

        return totalPrice + price;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-remove {
  align-self: start;
  text-decoration: underline;
  transition: all 0.3s;
  align-self: flex-end;
  @media (any-hover: hover) {
    &:hover {
      text-decoration: none;
    }
  }
}
h2 {
  font-size: 24px;
}
.button-white {
  border: 2px solid #603809;
  padding: 20px 50px;
  border-radius: 30px;
  text-transform: uppercase;
  transition: all 0.3s;
  @media (any-hover: hover) {
    &:hover {
      background-color: #ffd391;
      color: #603809;
    }
  }
}
</style>
