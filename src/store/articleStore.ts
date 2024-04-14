import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAxios } from '../composables/useAxios';
import { IArticleDetailItem, IArticleList, IArticleDetail } from '../types';
import { URLS } from '../Urls';

export const useArticleStore = defineStore('article', () => {
  const articleList = ref<IArticleDetailItem[] | null>(null);
  const articleDetail = ref<IArticleDetailItem | null>(null);
  const currentArticle = ref<IArticleDetailItem | null>(null);
  const isLoading = ref(false);

  const fetchArticles = async () => {
    isLoading.value = true;
    const { data } = await useAxios<IArticleList>(URLS.articleListAjax(), 'GET', null, null);
    if (data.value !== null) {
      articleList.value = data.value.data;
    }

    isLoading.value = false;
  }

  const fetchArticleDetail = async (id: string) => {
    isLoading.value = true;
    const { data } = await useAxios<IArticleDetail>(URLS.articleDetailAjax(id), 'GET', null, null);
    if (data.value !== null) {
      articleDetail.value = data.value.data;
    }

    isLoading.value = false;
  }

  const updateArticleDetail = async (id: string, requestData: IArticleDetailItem) => {
    isLoading.value = true;
    const { data } = await useAxios<IArticleDetailItem>(URLS.articleDetailAjax(id), 'PUT', null, requestData);
    if (data.value !== null) {
      articleDetail.value = data.value;
    }

    isLoading.value = false;
  }

  const addArticle = async (requestData: IArticleDetailItem) => {
    isLoading.value = true;
    const { data } = await useAxios<IArticleDetailItem>(URLS.articleAddAjax(), 'POST', null, requestData);
    if (data.value !== null) {
      articleDetail.value = data.value;
    }

    isLoading.value = false;
  }

  return {
    articleList,
    articleDetail,
    currentArticle,
    isLoading,
    fetchArticles,
    fetchArticleDetail,
    updateArticleDetail,
    addArticle,
  };
});
