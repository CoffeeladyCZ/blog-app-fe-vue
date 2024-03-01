import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { useAxios } from '../composables/useAxios';
import { IArticleDetailItem } from '../types';
import { dummyArticle } from '../../dummyData';

export const useArticleStore = defineStore('article', () => {
  const articleList = ref<IArticleDetailItem[] | null>(null);
  const articleDetail = ref<IArticleDetailItem | null>(null);
  const currentArticle = ref<IArticleDetailItem | null>(null);
  const isLoading = ref(false);

  const fetchArticles = async () => {
    isLoading.value = true;
    // const { data } = await useAxios<IArticleList>('/api/article/list/', 'GET', null, null);
    // if (data.value !== null) {
    //   articleList.value = data.value.data;
    // }

    // mock data
    articleList.value = dummyArticle;
    isLoading.value = false;
  }

  const fetchArticleDetail = async (id: string) => {
    isLoading.value = true;
    // const { data } = await useAxios<IArticleDetail>(`/api/article/${id}/`, 'GET', null, null);
    // if (data.value !== null) {
    //   articleDetail.value = data.value.data;
    // }

    // mock data
    articleDetail.value = dummyArticle.find((item: IArticleDetailItem) => item.article_id === id) || null;
    isLoading.value = false;
  }

  return {
    articleList,
    articleDetail,
    currentArticle,
    fetchArticles,
    fetchArticleDetail,
  };
});
