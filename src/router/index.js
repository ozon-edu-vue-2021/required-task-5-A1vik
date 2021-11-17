import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import Favorites from "@/views/Favorites.vue";
import { routes as routerLinks } from "@/router/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: routerLinks.root,
    name: "Home",
    component: Home,
  },
  {
    path: routerLinks.cart,
    name: "Cart",
    component: Cart,
  },
  {
    path: routerLinks.favorites,
    name: "Favorites",
    component: Favorites,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
