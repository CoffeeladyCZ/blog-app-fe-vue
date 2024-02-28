<script lang="ts" setup>
import { onMounted } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useRoute } from 'vue-router';

import { useArticleStore } from '../store/articleStore';
import { trackPageview, trackEvent } from '../utils/analytics-api';

const { articleDetail, fetchArticleDetail } = useArticleStore();
const route = useRoute();

const createParams = (event: string | null) => {
  const params = new URLSearchParams();
  params.append('url', window.location.href);
  params.append('article_id', articleDetail?.article_id ?? '');
  params.append('version', articleDetail?.version ?? '');
  params.append('unique_id', localStorage.getItem('uniqueId') ?? '');
  params.append('event', event ?? '');
  return params;
}

onMounted(async () => {
  const id = route.params.id as string
  await fetchArticleDetail(id);
  trackPageview(createParams(null));
});
</script>

<template>
  <div v-if="articleDetail">
    <div class="article pa-8">
      <img :src="articleDetail.image" alt="Article Image" class="w-9/12 h-auto mb-4">
      <div class="flex justify-evenly">
        <h1 class="text-2xl font-bold mb-2">{{ articleDetail.title }}</h1>
      </div>
      <p class="text-gray-600">{{ articleDetail.subtitle }}</p>
      <MdEditor v-model="articleDetail.content" language="en-US" />
      <PButton label="Sign up for Blinkist" link @click="trackEvent(createParams('subscibe-button'))" />
    </div>
  </div>
</template>


<style scoped>
.article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
../utils/analytics-api.js