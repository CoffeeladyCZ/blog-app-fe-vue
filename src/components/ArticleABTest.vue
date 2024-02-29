<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const testingVariation = ref({
  version: 'test_variation',
  title: '',
  subtitle: '',
  content: '',
});

const controlVariation = ref({
  version: 'control_variation',
  title: '',
  subtitle: '',
  content: '',
});

const submitVersions = () => {
  // place for fetch data to API
};

onMounted(async () => {
  //
});
</script>

<template>
  <div class="flex justify-content-between my-6">
    <p class="text-3xl font-medium m-0">Set test variants</p>
    <PButton label="Save" class="px-4" @click="submitVersions()" />
  </div>
    <p class="text-2xl font-base">Control variation</p>
    <PCard class="mb-4 w-auto">
      <template #header>
        <img alt="image" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #title>
        <div class="my-4">
          <PFloatLabel>
            <PInputText v-model="controlVariation.title" class="col-12" />
            <label>Title</label>
          </PFloatLabel>
        </div>
      </template>
      <template #subtitle>
        <PFloatLabel>
          <PTextarea v-model="controlVariation.subtitle" rows="5" cols="79" class="col-12" />
          <label>Subtitle</label>
        </PFloatLabel>      </template>
      <template #content>
        <PEditor
          v-model="controlVariation.content"
          editorStyle="height: 320px"
          class="my-3 col-12"
          :pt="{ 
            root: { class: 'bg-white-20 border-transparent' }
          }"
        />
      </template>      
    </PCard>
    <PDivider />
    <p class="text-2xl font-base">Testing variation</p>
    <PCard class="mb-4 w-auto">
      <template #header>
        <PImage alt="image" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #title>
        <div class="my-4">
          <PFloatLabel>
            <PInputText v-model="testingVariation.title" class="col-12" />
            <label>Title</label>
          </PFloatLabel>
        </div>
      </template>
      <template #subtitle>
        <PFloatLabel>
          <PTextarea v-model="testingVariation.subtitle" rows="5" cols="79" class="col-12" />
          <label>Subtitle</label>
        </PFloatLabel>
      </template>
      <template #content>
        <PEditor
          v-model="testingVariation.content"
          class="my-3 col-12"
          editorStyle="height: 320px"
          :pt="{ 
            root: { class: 'bg-white-20 border-transparent' }
          }"
        />
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
