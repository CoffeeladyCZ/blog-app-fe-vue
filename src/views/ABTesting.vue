<template>
  <div>
    <h1>Choose Article for AB Testing</h1>
    <div class="flex gap-5">
      <template v-for="article in articleWithoutABTest" :key="article.id">
        <ArticleCard :article="article" button="AB Test"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import ArticleCard from '../components/ArticleCard.vue';

import { useArticleStore } from '../store/articleStore';

const articleStore = useArticleStore();
const { articleList } = storeToRefs(articleStore);

onMounted(async () => {
  await articleStore.fetchArticles();
});

const articleWithoutABTest = computed(() => {
  if (articleList.value !== null) {
    return articleList.value.filter((item) => item.ab_test === null);
  };
});
</script>
