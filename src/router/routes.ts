import type { RouterOptions } from "vue-router";
import NotFound from "../views/NotFound.vue";
import ArticleList from "../views/ArticleList.vue";
import ArticleDetail from "../views/ArticleDetail.vue";
import ArticleEditForm from "../views/ArticleEditForm.vue";
import ArticleAddForm from "../views/ArticleAddForm.vue";
import ArticleABTest from "../components/ArticleABTest.vue";

const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "Home",
    component: ArticleList,
  },
  {
    path: "/article/:id",
    name: "Article",
    component: ArticleDetail,
  },
  {
    path: "/articles",
    name: "Articles",
    component: ArticleList,
  },
  {
    path: "/article/:id/edit",
    name: "Edit article",
    component: ArticleEditForm,
  },
  {
    path: "/article/add",
    name: "Add article",
    component: ArticleAddForm,
  },
  {
    path:"/ab-testing",
    name: "ABTesting",
    component: ArticleABTest,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

export default routes;
