import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/service",
    name: "service",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServiceView.vue"),
  },
  {
    path: "/product",
    name: "product",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductView.vue"),
  },
  {
    path: "/contact",
    name: "contact",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
