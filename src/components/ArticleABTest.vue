<script lang="ts" setup>
import { useField, useForm } from 'vee-validate';
import { string } from 'yup';

const{ handleSubmit, resetForm } = useForm({
  initialValues: {
    testTitle: '',
    testSubtitle: '',
    testContent: '',
    controlTitle: '',
    controlSubtitle: '',
    controlContent: '',
  },
  validationSchema: {
    testTitle: string().required('Item is required'),
    testSubtitle: string().required('Item is required'),
    testContent: string().required('Item is required'),
    controlTitle: string().required('Item is required'),
    controlSubtitle: string().required('Item is required'),
    controlContent: string().required('Item is required'),
  },
});

const { value: testTitle, errorMessage: testTitleError } = useField<string>('testTitle');
const { value: testSubtitle, errorMessage: testSubtitleError } = useField<string>('testSubtitle');
const { value: testContent, errorMessage: testControlError } = useField<string>('testContent');
const { value: controlTitle, errorMessage: controlTitleError } = useField<string>('controlTitle');
const { value: controlSubtitle, errorMessage: controlSubtitleError } = useField<string>('controlSubtitle');
const { value: controlContent, errorMessage: controlContentError } = useField<string>('controlContent');

const onSubmit = handleSubmit(async (values) => {
  const data = [
    {
      version: 'test_variation',
      title: values.testTitle,
      subtitle: values.testSubtitle,
      content: values.testContent,
    },
    {
      version: 'control_variation',
      title: values.controlTitle,
      subtitle: values.controlSubtitle,
      content: values.controlContent,
    }
  ]
  console.log('data', data);
  // place for fetch data to API
  resetForm();
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="flex justify-content-between my-6">
      <p class="text-3xl font-medium m-0">Set test variants</p>
      <PButton label="Save" class="px-4" type="submit" />
    </div>
    <p class="text-2xl font-base">Control variation</p>
    <PCard class="mb-4 w-auto">
      <template #header>
        <img alt="image" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #subtitle>
        <div class="my-4 p-2">
          <PFloatLabel>
            <PInputText
              v-model="controlTitle"
              :class="{ 'p-invalid': controlTitleError }"
              class="col-12" />
            <label>Title</label>
          </PFloatLabel>
          <small v-if="controlTitleError" class="p-error">{{ controlTitleError }}</small>
        </div>
        <div class="p-2">
          <PFloatLabel>
            <PTextarea
            v-model="controlSubtitle"
            rows="5"
            cols="79"
            :class="{ 'p-invalid': controlSubtitleError }"
            class="col-12" />
            <label>Subtitle</label>
          </PFloatLabel>
          <small v-if="controlSubtitleError" class="p-error">{{ controlSubtitleError }}</small>
        </div>
      </template>
      <template #content>
        <PEditor
          v-model="controlContent"
          editorStyle="height: 320px"
          class="my-3 col-12"
          :class="{ 'p-invalid': controlContentError }"
          :pt="{ 
            root: { class: 'bg-white-20' }
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
        <template #subtitle>
          <div class="my-4 p-2">
            <PFloatLabel>
              <PInputText
                v-model="testTitle"
                :class="{ 'p-invalid': testTitleError }"
                class="col-12"
              />
              <label>Title</label>
            </PFloatLabel>
            <small v-if="testTitleError" class="p-error">{{ testTitleError }}</small>
          </div>
          <div class="p-2">
            <PFloatLabel>
              <PTextarea
                v-model="testSubtitle"
                rows="5"
                cols="79"
                :class="{ 'p-invalid': testSubtitleError }"
                class="col-12"
              />
              <label>Subtitle</label>
            </PFloatLabel>
            <small v-if="testSubtitleError" class="p-error">{{ testSubtitleError }}</small>
          </div>
        </template>
        <template #content>
          <PEditor
            v-model="testContent"
            class="my-3 col-12"
            :class="{ 'p-invalid': testControlError }"
            editorStyle="height: 320px"
            :pt="{ 
              root: { class: 'bg-white-20' }
            }"
          />
        </template>      
      </PCard>
    </form>
</template>


<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
