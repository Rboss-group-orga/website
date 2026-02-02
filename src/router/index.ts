import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";
import LayoutBase from "@/layouts/LayoutBase.vue";
import Page404 from "@/pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LayoutBase,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: ":pathMatch(.*)*",
          name: "ViewNotFound",
          component: Page404,
        },
      ],
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
