<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useAxios } from '../composables/useAxios';
import { URLS } from '../Urls';

const router = useRouter();

const isLoading = ref(false);

// fake login for setting cookies
const fetchLogin = async () => {
    isLoading.value = true;

    if (localStorage.getItem('login') === 'true') {
        isLoading.value = false;
        return;
    }
    await useAxios('/api/login/login', 'GET', null, null);
    
    isLoading.value = false;
  }

onMounted(async () => {
   await fetchLogin();
});

const items = ref([
    {
        label: 'Articles',
        command: () => {
            router.push(URLS.articleListView());
        }
    },
    {
        label: 'A/B Testing',
        command: () => {
            router.push(URLS.abTestingView());
        }
    },
]);
</script>

<template>
  <PMenubar
    :model="items"
    :pt="{
        root: { class: 'border-none bg-transparent' },
        menuitem: { class: 'px-0' }
    }"
>
      <template #item="{ item, props }" class="m-0 px-0">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a :ripple="true" :href="href" v-bind="props.action" @click="navigate">
                  <span class="ml-2">{{ item.label }}</span>
              </a>
          </router-link>
          <a v-else :ripple="true" :href="item.url" :target="item.target" v-bind="props.action">
              <span class="ml-2">{{ item.label }}</span>
          </a>
      </template>
  </PMenubar>
</template>