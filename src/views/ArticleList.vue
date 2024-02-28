<template>
  <div>
    <h1>Article List</h1>
    <div class="flex gap-5">
      <template v-for="article in articleStore.articleList" :key="article.id">
        <ArticleCard :article="article" button="Read" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useArticleStore } from '../store/articleStore';

import ArticleCard from '../components/ArticleCard.vue';

// const showVersionA = ref(Math.random() < 0.5);

// const articleVariant = computed(() => {
//   if (mockData.map((item) => item.ab_test)) {
//     return mockData.find((item) => item.variants.find((version) => version === 'v1');
//   }

//   if (mockData.length !== undefined) {
//     if (showVersionA.value) {
//       return mockData.variants.find((item) => item.version === 'v1');
//     }
//     return mockData.find((item) => item.version === 'v2');
//   }
// });

const articleStore = useArticleStore();

onMounted(async () => {
  await articleStore.fetchArticles();
});
</script>

