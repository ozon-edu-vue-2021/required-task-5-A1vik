<template>
  <li class="card">
    <div class="card__image-container">
      <img :src="imageSrc" alt="Картинка товара" class="card__image">
    </div>
    <div class="card__price">{{ product.price }} &#8381;</div>
    <div class="card__title">{{ product.description }}</div>
    <div class="card__footer">
      <button class="card__add-to-cart" @click="addProductToCart(product)">В корзину</button>
      <button class="card__like" @click="toggleFavoriteProduct(product)">
        <favorite v-if="isFavoriteIcon" />
        <like v-else />
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import Like from "@/assets/images/like.svg";
import Favorite from "@/assets/images/favorite.svg";

export default {
  name: "Card",
  components: {
    Like,
    Favorite
  },
  props: ["product"],
  computed: {
    imageSrc() {
      return require(`../assets/images/${this.product.image}.webp`);
    },
    isFavoriteIcon() {
      return this.product.isFavorite;
    }
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("products", ["toggleFavoriteProduct"])
  }
}
</script>

<style scoped>
.card {
  padding: 8px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.card__image-container {
  margin-bottom: 8px;
}

.card__image {
  max-width: 100%;
  height: auto;
}

.card__price {
  margin-bottom: 8px;
}

.card__title {
  font-size: 14px;
  margin-bottom: 12px;
  height: 50px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__add-to-cart {
  border: none;
  background-color: #e30611;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 34px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all .15s ease-in-out;
}

.card__add-to-cart:hover {
  background-color: #c90000;
}

.card__like {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.card__like svg {
  width: 20px;
  height: 20px;
}
</style>