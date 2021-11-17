<template>
  <li class="cart-item">
    <div class="cart-item__image-container">
      <img :src="imageSrc" alt="" class="cart-item__image">
    </div>
    <div class="cart-item__info">
      <p class="cart-item__description">
        {{ product.description }}
      </p>
      <p class="cart-item__product-price">{{ product.price }} &#8381;</p>
      <div class="cart-item__btns">
        <button @click="deleteProductFromCart(product)">Удалить</button>
      </div>
    </div>
    <div class="cart-item__counter">
      <button @click="changeProductCount({ product, type: 'decrement' })">
        &#10134;
      </button>
      <span class="cart-item__count">{{ product.count }}</span>
      <button @click="changeProductCount({ product, type: 'increment' })">
        &#10133;
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "CartItem",
  props: ["product"],
  methods: {
    ...mapActions("cart", ["changeProductCount", "deleteProductFromCart"]),
  },
  computed: {
    imageSrc() {
      return require(`../assets/images/${this.product.image}.webp`);
    }
  }
}
</script>

<style>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.cart-item__image-container {
  max-width: 80px;
  margin-right: 10px;
}

.cart-item__image {
  width: 100%;
  height: auto;
}

.cart-item__info {
  max-width: 70%;
}

.cart-item__description {
  font-size: 15px;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.cart-item__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
}

.cart-item__btns button {
  border: none;
  background: none;
  color: blue;
  cursor: pointer;
}

.cart-item__counter {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.cart-item__counter button {
  background: none;
  border: none;
  cursor: pointer;
}

.cart-item__count {
  margin: 0 10px;
}

.cart-item__product-price {
  margin: 4px 0;
}

.cart-item__description {
  margin: 0;
}
</style>