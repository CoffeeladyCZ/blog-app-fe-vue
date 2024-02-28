export interface IArticleDetailItem {
  article_id: string;
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