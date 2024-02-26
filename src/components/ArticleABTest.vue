<script lang="ts" setup>
import { defineProps } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

import { IArticleDetail } from '../types';

const props = defineProps<IArticleDetail>();
</script>

<template>
    <p class="text-2xl font-medium">Control variation</p>
    <PCard style="width: 50rem">
      <template #header>
        <img alt="user header" :src="props.image" />
      </template>
      <template #title>
        <h1 class="text-2xl font-bold mb-2">{{ props.title }}</h1>
        <PButton label="A/B test" class="mr-2" />
      </template>
      <template #subtitle>{{ props.subtitle }}</template>
      <template #content>
        <MdEditor v-model="props.content" language="en-US" />
      </template>      
    </PCard>
    <PDivider />
    <p class="text-2xl font-medium">Testing variation</p>
    <PCard style="width: 50rem">
      <template #header>
        <img alt="user header" :src="props.image" />
      </template>
      <template #title>
        <h1 class="text-2xl font-bold mb-2">{{ props.title }}</h1>
        <PButton label="A/B test" class="mr-2" />
      </template>
      <template #subtitle>{{ props.subtitle }}</template>
      <template #content>
        <MdEditor v-model="props.content" language="en-US" />
      </template>      
    </PCard>
</template>


<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
