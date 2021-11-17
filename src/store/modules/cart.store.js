import {
  DECREMENT_PRODUCT_COUNT,
  INCREMENT_PRODUCT_COUNT,
  PUSH_TO_CART,
  REMOVE_FROM_CART
} from "../mutation-types";

const state = () => ({
  cart: []
});

const getters = {
  isEmpty: (state) => state.cart.length === 0,
  getTotalCount: (state) => {
    return state.cart.reduce((acc, product) => acc + product.count, 0);
  },
  getTotalSum: (state, getters, rootState) => {
    return state.cart.reduce((sum, cartItem) => {
      const product = rootState.products.products.find((product) => product.id === cartItem.id);
      return sum + product.price * cartItem.count;
    }, 0);
  },
  cartProducts: (state, getters, rootState) => {
    return state.cart.map((cartItem) => {
      const product = rootState.products.products.find((product) => product.id === cartItem.id);
      return {
        ...product,
        count: cartItem.count
      }
    });
  }
};

const mutations = {
  [PUSH_TO_CART]: (state, { id }) => {
    state.cart.push({id, count: 1});
  },
  [INCREMENT_PRODUCT_COUNT]: (state, { id }) => {
    const cartItem = state.cart.find(item => item.id === id);
    cartItem.count++;
  },
  [DECREMENT_PRODUCT_COUNT]: (state, { id }) => {
    const cartItem = state.cart.find(item => item.id === id);
    cartItem.count--;
  },
  [REMOVE_FROM_CART]: (state, { id }) => {
    state.cart = state.cart.filter((product) => product.id !== id);
  }
}

const actions = {
  addProductToCart: ({ state, commit }, product) => {
    const cartItem = state.cart.find((item) => item.id === product.id);

    if (cartItem) {
      commit(INCREMENT_PRODUCT_COUNT, cartItem);
    } else {
      commit(PUSH_TO_CART, { id: product.id });
    }
  },
  changeProductCount: ({ state, commit }, { product, type }) => {
    const cartItem = state.cart.find((item) => item.id === product.id);

    if (type === 'increment') {
      commit(INCREMENT_PRODUCT_COUNT, { id: product.id });
    } else if (type === 'decrement') {
      cartItem.count === 1
        ? commit(REMOVE_FROM_CART, { id: product.id })
        : commit(DECREMENT_PRODUCT_COUNT, { id: product.id });
    }
  },
  deleteProductFromCart: ({ commit }, product) => {
    commit(REMOVE_FROM_CART, { id: product.id });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
