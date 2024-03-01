<template>
  <div v-if="articleDetail">
    <div class="article pa-8">
      <div class="max-w-full mx-auto">
        <PImage :src="articleDetail.image" alt="Article Image" class="mb-4"/>
      </div>
      <div class="flex justify-evenly">
        <h1 class="text-2xl font-bold mb-2">{{ articleDetail.title }}</h1>
      </div>
      <p class="text-gray-600">{{ articleDetail.subtitle }}</p>
      <PEditor
        v-model="articleDetail.content"
        editorStyle="height: 320px"
        readonly
        class="editor"
        :pt="{ 
          toolbar: { class: 'hidden' },
          content: {
            class: 'border-none',
            style: { background: '#F8F9FA'}
          }
        }"
      />
      <PButton label="Sign up for Blinkist" link @click="trackEvent(createParams('subscibe-button'))" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCookies } from "vue3-cookies";

import { useArticleStore } from '../store/articleStore';
import { trackPageview, trackEvent } from '../utils/analytics-api';

const { fetchArticleDetail } = useArticleStore();
const articleStore = useArticleStore();
const { articleDetail } = storeToRefs(articleStore);

const route = useRoute();
const { cookies } = useCookies();

const createParams = (event: string | null) => {
  const params = new URLSearchParams();
  params.append('url', window.location.href);
  params.append('article_id', articleDetail.value?.article_id ?? '');
  params.append('version', articleDetail.value?.version ?? '');
  params.append('unique_id', cookies.get('uniqueId') ?? '');
  params.append('event', event ?? '');
  return params;
}

onMounted(async () => {
  const id = route.params.id as string
  await fetchArticleDetail(id);

  trackPageview(createParams(null));
});
</script>

<style scoped>
.article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.editor {
  :global(.p-editor-container .p-editor-toolbar.ql-snow) {
    border: none !important;
  }
}


</style>
