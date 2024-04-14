import { IUrls } from './types';

export const URLS:IUrls = Object.freeze({
  articleDetailView: (articleId: string) => `/article/${articleId}/`,
  articleListView: () => '/articles/',
  articleUpdateView: (articleId: string) => `/article/${articleId}/edit/`,
  articleAddView: () => '/article/add/',
  articleDetailAjax: (articleId: string) => `/api/article/${articleId}/`,
  articleListAjax: () => '/api/article/list/',
  articleUpdateAjax: (articleId: string) => `/api/article/${articleId}/`,
  articleAddAjax: () => '/api/article/create/',
  abTestingView: () => '/ab-testing/',
});
