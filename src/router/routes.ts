import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import LockiosPage from "../pages/LockiosPage.vue";
import AccountPage from "../pages/AccountPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AccountPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/lockios",
    name: "Lockios",
    component: LockiosPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
