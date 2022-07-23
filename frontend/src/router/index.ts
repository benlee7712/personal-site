import { createRouter, createWebHistory } from "vue-router";

import Photography from "../views/Photography"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/photography",
      component: Photography,
      meta: {
        title: "Photography",
      },
    },
  ],
});

export default router;
