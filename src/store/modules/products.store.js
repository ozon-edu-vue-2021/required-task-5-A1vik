import { getRandomNumber } from "../../helpers";
import { TOGGLE_FAVORITES, SET_PRODUCTS } from "../mutation-types";

const state = {
  products: [],
}

const actions = {
  fetchProducts: async ({ commit }) => {
    const res = await fetch("https://random-data-api.com/api/food/random_food?size=30");
    const data = await res.json();
    const products = data.map((product) => {
      product.price = getRandomNumber(50, 2000);
      product.image = getRandomNumber(0, 11) + 1;
      product.isFavorite = false;
      return product;
    });
    commit(SET_PRODUCTS, products);
  },
  toggleFavoriteProduct: ({ commit }, product) => {
    commit(TOGGLE_FAVORITES, product.id)
  }
}

const getters = {
  allProducts(state) {
    return state.products;
  },
  favoriteProducts(state) {
    return state.products.filter((product) => product.isFavorite === true);
  }
}

const mutations = {
  [SET_PRODUCTS]: (state, products) => {
    state.products = products;
  },
  [TOGGLE_FAVORITES]: (state, id) => {
    const targetIdx = state.products.findIndex((item) => item.id === id);
    state.products[targetIdx].isFavorite = !state.products[targetIdx].isFavorite;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
