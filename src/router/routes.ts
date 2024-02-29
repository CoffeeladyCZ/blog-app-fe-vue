import type { RouterOptions } from "vue-router";
import NotFound from "../views/NotFound.vue";

const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/ArticleList.vue"),
  },
  {
    path: "/article/:id",
    name: "Article",
    component: () => import("../views/ArticleDetail.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/ArticleList.vue"),
  },
  {
    path:"/ab-testing",
    name: "ABTesting",
    component: () => import("../components/ArticleABTest.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

export default routes;
