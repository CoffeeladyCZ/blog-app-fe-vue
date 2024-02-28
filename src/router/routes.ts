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
    component: () => import("../views/ArticleDetail.vue"),
  },
  {
    path: "/article/:id/abtest",
    name: "ArticleABTest",
    component: () => import("../components/ArticleABTest.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/ArticleList.vue"),
  },
  {
    path:"/ab-testing",
    name: "ABTesting",
    component: () => import("../views/ABTesting.vue"),
  }
];

export default routes;
