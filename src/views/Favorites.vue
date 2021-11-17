<template>
  <ul class="cards-list" v-if="isShowProducts">
    <card
      v-for="product in favoriteProducts"
      :key="product.id"
      :product="product"
    />
  </ul>
  <div v-else>Добавьте товары в избранное</div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  computed: {
    ...mapGetters("products", ["favoriteProducts"]),
    isShowProducts() {
      return this.favoriteProducts.length > 0;
    },
  },
}
</script>

<style>
.cards-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}

.cards-list li {
  margin-right: 10px;
  margin-bottom: 20px;
  max-width: 22%;
}
</style>