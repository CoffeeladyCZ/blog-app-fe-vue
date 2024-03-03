<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';

import { useArticleStore } from '../store/articleStore';
import ArticleCard from '../components/ArticleCard.vue';
import { storeToRefs } from 'pinia';

const articleStore = useArticleStore();
const { articleList } = storeToRefs(articleStore);
const version = ref<string | null>(null);

const articleVariant = computed(() => {
  if (articleList.value !== null && articleList !== undefined) {
    const withAB =  articleList.value.filter((article) => article.ab_test !== null);


    const selectedVersion = version.value || Math.random() < 0.5 ? 'test_variation' : 'control_variation';
    const chosenVersion = withAB.filter((articleGroup) => articleGroup.version === selectedVersion);

    localStorage.setItem('selectedVersion', selectedVersion);
    const withoutAB = articleList.value.filter((article) => article.ab_test === null);
    return [, ...chosenVersion, ...withoutAB];
  }
});

onMounted(async () => {
  await articleStore.fetchArticles();
  version.value = localStorage.getItem('selectedVersion') ?? null;
});
</script>

<template>
  <div v-if="articleList">
    <h1>Article List</h1>
    <div class="flex gap-5 flex-wrap">
      <template v-for="(article) in articleVariant">
        <ArticleCard :article="article" button="Read" />
      </template>
    </div>
  </div>
</template>
