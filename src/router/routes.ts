import type { RouterOptions } from "vue-router";

const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/article/:id",
    name: "Article",
    component: () => import("../components/Article.vue"),
  },
  {
    path: "/article/:id/abtest",
    name: "ArticleABTest",
    component: () => import("../components/ABTest.vue"),
  }
];

export default routes;
