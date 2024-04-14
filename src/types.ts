export interface IUrls {
  articleDetailView: (articleId: string) => string;
  articleListView: () => string;
  articleUpdateView: (articleId: string) => string;
  articleDetailAjax: (articleId: string) => string;
  articleListAjax: () => string;
  articleUpdateAjax: (articleId: string) => string;
  abTestingView: () => string;
  articleAddView: () => string;
  articleAddAjax: () => string;
}

export interface IArticleDetailItem {
  article_id?: string;
  title: string;
  subtitle: string;
  perex: string;
  content: string;
  image: string;
  ab_test: string | null;
  version?: string
}

export interface IArticleList {
  data: IArticleDetailItem[]
}

export interface IArticleDetail {
  data: IArticleDetailItem;
}