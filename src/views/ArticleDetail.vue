<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCookies } from "vue3-cookies";

import { useArticleStore } from '../store/articleStore';
import { trackPageview, trackEvent } from '../utils/analytics-api';

const { fetchArticleDetail } = useArticleStore();
const articleStore = useArticleStore();
const { articleDetail } = storeToRefs(articleStore);

const route = useRoute();
const router = useRouter();
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

<template>
  <div v-if="articleDetail">
    <div class="article pa-8">
      <div class="flex justify-content-end my-4 mr-2">
        <PButton 
          class="px-3"
          label="Edit article"
          @click="router.push(`/article/${articleDetail?.article_id}/edit`);"
        />
      </div>
      <div class="mx-auto px-3">
        <PImage :src="articleDetail.image" alt="Article Image" class="mb-4" imageClass="image"/>
      </div>
      <div class="flex justify-evenly">
        <h1 class="text-2xl font-bold mb-2 px-3">{{ articleDetail.title }}</h1>
      </div>
      <p class="text-gray-600 px-3">{{ articleDetail.subtitle }}</p>
      <PEditor
        v-model="articleDetail.content"
        editorStyle="height: 320px"
        readonly
        :pt="{ 
          toolbar: { class: 'hidden' },
          content: {
            class: 'border-none',
          },
          root: { class: 'p-0' }
        }"
      />
      <PButton
        class="px-3"
        label="Sign up for newsletter"
        link
        @click="trackEvent(createParams('subscibe-button'))"
      />
    </div>
  </div>
</template>

<style scoped>
.article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.editor {
  :global(.editor.ql-editor) {
    padding: 0 !important;
  }
}
</style>

<style global>
.image {
  max-width: 100%;
  width: 800px;
}
</style>
