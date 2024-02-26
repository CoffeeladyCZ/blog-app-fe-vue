<script lang="ts" setup>
import { ref, computed } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useRouter } from 'vue-router'

import { mockData } from '../data.ts';
import { IArticleDetail } from '../types';

// import { defineProps } from 'vue';

// const props = defineProps<IArticle>();
const router = useRouter()

const showVersionA = ref(Math.random() < 0.5);

const articleVariant: IArticleDetail = computed(() => {
  if (mockData.length !== undefined) {
    if (showVersionA.value) {
      return mockData.find((item) => item.version === 'v1');
    }
    return mockData.find((item) => item.version === 'v2');
  }
});

</script>

<template>
    <div class="text-right m-4">
      <PButton label="A/B test" class="mr-2" @click="router.push('/article/:id/abtest')" />
    </div>
    <div class="article pa-8">
      <img :src="articleVariant.image" alt="Article Image" class="w-9/12 h-auto mb-4">
      <div class="flex justify-evenly">
        <h1 class="text-2xl font-bold mb-2">{{ articleVariant.title }}</h1>
      </div>
      <p class="text-gray-600">{{ articleVariant.subtitle }}</p>
      <MdEditor v-model="articleVariant.content" language="en-US" />
    </div>
</template>


<style scoped>
.article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
