<template>
   <PCard
        v-if="props.article"
        style="width: 25rem; overflow: hidden"
      >
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>{{ props.article.title }}</template>
        <template #subtitle>{{ props.article.perex}}</template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <PButton
                  :label="props.button"
                  severity="secondary"
                  outlined
                  class="w-full"
                  @click="setCurrentArticle(props.article)"
                />
            </div>
        </template>
      </PCard>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { IArticleDetailItem } from '../types';
import { useArticleStore } from '../store/articleStore';
import { buttonTypes } from '../constants';

const props = defineProps<{ article: IArticleDetailItem, button: string }>();
const router = useRouter();
const articleStore = useArticleStore();

const setCurrentArticle = (data: IArticleDetailItem) => {
  if (props.button === buttonTypes.abTest) {
    router.push('/ab-testing');
  } else {
    router.push(`/article/${data.article_id}`);
  }
  articleStore.currentArticle = data;
};

</script>