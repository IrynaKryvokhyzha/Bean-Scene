<template>
  <section class="cart">
    <div class="cart-page page">
      <div v-for="itemId in getCartList" :key="itemId" class="page__item">
        <div class="cart__products products">
          <div class="products__products-image">
            <img :src="getItemImage(itemId.id)" alt="product image" />
          </div>
          <div class="products__product-content content-product">
            <div class="content-product__title">
              {{ getItemTitle(itemId.id) }}
            </div>
            <!-- Зробити кнопки + та - щоб кількість коригувати -->
            <div>Quantity: {{ itemId.quantity }}</div>
            <!-- <div class="content-product__price">	{{getCurrentPrice(getItemPriceWithQuantity(itemId.id))}} {{ getCurrencyTitle }} </div> -->
            <div class="content-product__item-price">
              ({{ getItemPrice(itemId.id) }} $ / item)
            </div>
            <button
              class="button-remove"
              variant="text"
              @click="rejectItem(itemId.id)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div class="page__actions">
        <div class="subtotal">Subtotal: {{ getTotalPrice() }} $</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartComponent",

  computed: {
    ...mapGetters("flavorsItems", ["getFlavorsList", "getItemById"]),
    ...mapGetters("cartList", ["getCartList", "getItemById"]),
  },
  watch: {
    getTotalPrice(newTotalPrice) {
      this.$emit("update-total-price", newTotalPrice);
    },
  },

  methods: {
    ...mapActions("cartList", ["loadCartList", "rejectItem"]),

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
  mounted() {
    this.$emit("update-total-price", this.getTotalPrice);
  },
};
</script>

<style lang="scss" scoped>
.button-remove {
  align-self: start;
  text-decoration: underline;
  transition: all 0.3s;
  align-self: flex-end;
  @media (max-width: 450px) {
    align-self: center;
  }
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
