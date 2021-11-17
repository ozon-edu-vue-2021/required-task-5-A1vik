<template>
  <div class="home">
    <ul class="cards-list" v-if="allProducts.length">
      <card
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
    <div v-else>Загрузка ...</div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Card },
  name: "Home",
  computed: {
    ...mapGetters("products", ["allProducts"]),
    isShowProducts() {
      return this.allProducts.length > 0;
    },
  },
  methods: mapActions("products", ["fetchProducts"]),
  async mounted() {
    if (!this.allProducts.length) {
      this.fetchProducts();
    }
  },
};
</script>

<style scoped>
.home {
  margin-top: 30px;
}
.cards-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.cards-list li {
  margin-right: 10px;
  margin-bottom: 20px;
  max-width: 22%;
}
</style>