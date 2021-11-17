<template>
  <div class="cart">
    <ul class="cart-list" v-if="getTotalCount">
      <cart-item
        v-for="product in cartProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
    <div class="cart-list" v-else>Нет товаров</div>
    <div class="cart-order order">
      <button
        class="order__button"
        @click="checkoutCart"
        :disabled="isEmpty"
      >
        Оформить
      </button>
      <div class="order__sum">
        <div class="order__block">
          <p class="order__title">Ваша корзина</p>
          <p class="order__value">{{ totalCountText }}</p>
        </div>
        <div class="order__block">
          <p class="order__title">Общаяя стоимость</p>
          <p class="order__value">{{ getTotalSum }} &#8381;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/CartItem.vue";

export default {
  components: { CartItem },
  name: "Cart",
  computed: {
    ...mapGetters("cart", ["cartProducts", "getTotalCount", "getTotalSum", "isEmpty"]),
    totalCountText() {
      if (this.getTotalCount === 1) {
        return '1 товар';
      } else if (this.getTotalCount > 1 && this.getTotalCount < 5) {
        return `${ this.getTotalCount } товара`;
      }
      return `${ this.getTotalCount } товаров`
    },
  },
  methods: {
    checkoutCart() {
      alert(JSON.stringify(this.cartProducts));
    }
  }
}
</script>

<style>
.cart {
  display: flex;
  width: 100%;
  margin-top: 30px;
}

.cart-list {
  width: 70%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cart-order {
  width: 30%;
  padding: 8px;
}

.order__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order__button {
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #41C300;
  min-height: 40px;
  color: #fff;
  cursor: pointer;
}
</style>