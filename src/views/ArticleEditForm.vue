<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useForm, useField } from 'vee-validate';
import { useRoute, useRouter } from 'vue-router';
import { string } from 'yup';
import { storeToRefs } from "pinia";

import { useArticleStore } from "../store/articleStore";
import { URLS } from '../Urls';


const { fetchArticleDetail, updateArticleDetail } = useArticleStore();

const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();
const { articleDetail, isLoading } = storeToRefs(articleStore);

const articleId = ref('');

const{ handleSubmit, resetForm, setValues } = useForm({
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
const { value: updatedImage } = useField('updatedImage');

type FormData = {
  updatedTitle: string;
  updatedSubtitle: string;
  updatedPerex: string;
  updatedContent: string;
  updatedImage: string;
}

const setInitialData = () => {
  if (articleDetail?.value !== null && articleDetail !== undefined) {
    const initialFormData: FormData = {
      updatedTitle: articleDetail.value.title,
      updatedSubtitle: articleDetail.value.subtitle,
      updatedPerex: articleDetail.value.perex,
      updatedContent: articleDetail.value.content,
      updatedImage: articleDetail.value.image,
    }
    setValues(initialFormData);
  }
}

const isChangedForm = computed(() => {
  return updatedTitle.value !== articleDetail.value?.title ||
    updatedSubtitle.value !== articleDetail.value?.subtitle ||
    updatedPerex.value !== articleDetail.value?.perex ||
    updatedContent.value !== articleDetail.value?.content;
})

const onSubmit = handleSubmit(async (values) => {
  const data = {
    title: values.updatedTitle,
    subtitle: values.updatedSubtitle,
    perex: values.updatedPerex,
    content: values.updatedContent,
    image: articleDetail.value!.image,
    ab_test: articleDetail.value!.ab_test,
    article_id: articleId.value,
    version: articleDetail.value!.version,
  }
  await updateArticleDetail(articleId.value, data);
  resetForm();
  router.push(URLS.articleDetailView(articleId.value));
});

onMounted(async () => {
  articleId.value = route.params.id as string;
  await fetchArticleDetail(articleId.value);
  setInitialData();
});
</script>

<template>
  <template  v-if="articleDetail">
    <form
      class="article flex flex-column justify-content-center"
      @submit="onSubmit"
    >
      <span class="p-text-secondary block mb-5 text-2xl font-bold">Update your article:</span>
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
      <div class="flex flex-column gap-2 mb-5">
        <p class="font-semibold">Image</p>
        <PImage
          class="image"
          :src="updatedImage"
          alt="Image"
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
            :disabled="!isChangedForm"
          />
      </div>
    </form>
  </template>
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
