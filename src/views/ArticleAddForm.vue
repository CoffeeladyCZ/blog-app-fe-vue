<script lang="ts" setup>
import { useForm, useField } from 'vee-validate';
import { useRouter } from 'vue-router';
import { string } from 'yup';
import { storeToRefs } from "pinia";

import { useArticleStore } from "../store/articleStore";
import { URLS } from '../Urls';


const { addArticle } = useArticleStore();

const router = useRouter();
const articleStore = useArticleStore();
const { isLoading } = storeToRefs(articleStore);

const{ handleSubmit, resetForm, meta } = useForm({
  initialValues: {
    updatedTitle: '',
    updatedSubtitle: '',
    updatedPerex: '',
    updatedContent: '',
  },
  validationSchema: {
    updatedTitle: string().required('Item is required'),
    updatedSubtitle: string().required('Item is required'),
    updatedPerex: string().required('Item is required'),
    updatedContent: string().required('Item is required'),
  },
});

const { value: updatedTitle } = useField('updatedTitle');
const { value: updatedSubtitle } = useField('updatedSubtitle');
const { value: updatedPerex } = useField('updatedPerex');
const { value: updatedContent } = useField('updatedContent');

const onSubmit = handleSubmit(async (values) => {
  const data = {
    title: values.updatedTitle,
    subtitle: values.updatedSubtitle,
    perex: values.updatedPerex,
    content: values.updatedContent,
    image: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    ab_test: null,
  }
  await addArticle(data);
  resetForm();
  router.push(URLS.articleListView());
});

</script>

<template>
  <form
    class="article flex flex-column justify-content-center"
    @submit="onSubmit"
  >
    <span class="p-text-secondary block mb-5 text-2xl font-bold">Create your article:</span>
    <div class="flex flex-column gap-2 mb-3">
        <label for="title" class="font-semibold">Title</label>
        <PInputText id="title" v-model="updatedTitle" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex flex-column gap-2 mb-5">
        <label for="subtitle" class="font-semibold">Subtitle</label>
        <PInputText id="subtitle" v-model="updatedSubtitle" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex flex-column gap-2 mb-5">
        <label for="perex" class="font-semibold">Perex</label>
        <PInputText id="perex" v-model="updatedPerex" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex flex-column gap-2 mb-5">
      <label for="content" class="font-semibold">Content</label>
      <PEditor
        v-model="updatedContent"
        editorStyle="height: 320px"
        :pt="{
          root: { class: 'p-0' }
        }"
      />
    </div>
    <div class="flex justify-content-end gap-2">
        <PButton
          type="button"
          label="Cancel"
          severity="secondary"
          @click="router.push(URLS.articleListView())"
        />
        <PButton
          type="submit"
          label="Save"
          :loading="isLoading"
          :disabled="!meta.valid"
        />
    </div>
  </form>
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
  width: 300px;
}
</style>
