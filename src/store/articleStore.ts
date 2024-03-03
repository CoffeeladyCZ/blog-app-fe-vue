import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAxios } from '../composables/useAxios';
import { IArticleDetailItem, IArticleList, IArticleDetail } from '../types';

export const useArticleStore = defineStore('article', () => {
  const articleList = ref<IArticleDetailItem[] | null>(null);
  const articleDetail = ref<IArticleDetailItem | null>(null);
  const currentArticle = ref<IArticleDetailItem | null>(null);
  const isLoading = ref(false);

  const fetchArticles = async () => {
    isLoading.value = true;
    const { data } = await useAxios<IArticleList>('/api/article/list/', 'GET', null, null);
    if (data.value !== null) {
      articleList.value = data.value.data;
    }

    isLoading.value = false;
  }

  const fetchArticleDetail = async (id: string) => {
    isLoading.value = true;
    const { data } = await useAxios<IArticleDetail>(`/api/article/${id}/`, 'GET', null, null);
    if (data.value !== null) {
      articleDetail.value = data.value.data;
    }

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
