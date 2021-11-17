<template>
  <header class="main-header">
    <router-link :to="routes.root" class="main-header__logo main-header__link">
      Market
    </router-link>
    <ul class="main-header__menu menu">
      <li class="menu__item" v-for="item in menu" :key="item.name">
        <router-link :to="item.link" class="main-header__link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="main-header__cart">
      <router-link
        :to="routes.cart"
        class="main-header__cart-link main-header__link"
      >
        {{ cartCount }}
        <cart-icon class="main-header__cart-icon" />
        Корзина
      </router-link>
    </div>
  </header>
</template>

<script>
import { routes } from "@/router/routes.js";
import { mapGetters } from "vuex";
import CartIcon from "@/assets/images/cart.svg";

export default {
  name: "AppHeader",
  components: {
    CartIcon,
  },
  data() {
    return {
      routes
    }
  },
  computed: {
    ...mapGetters("cart", { totalCount: "getTotalCount" }),
    cartCount() {
      return this.totalCount > 0 ? this.totalCount : '';
    },
    menu() {
      return [
        {
          link: this.routes.root,
          name: "Главная"
        },
        {
          link: this.routes.favorites,
          name: "Избранное"
        },
      ]
    }
  }
}
</script>

<style scoped>
.main-header {
  display: flex;
}

.main-header__logo {
  margin-right: 24px;
}

.main-header__cart {
  margin-left: auto;
}

.main-header__cart-icon {
  width: 33px;
  height: 20px;
  margin-right: 10px;
}

.main-header__cart-link {
  display: flex;
  align-items: center;
}

.main-header__link {
  text-decoration: none;
  color: #000;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu__item {
  margin-right: 10px;
}

.menu__item:hover {
  text-decoration: underline;
}
</style>