<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useCookies } from 'vue3-cookies';

const router = useRouter();
const { cookies } = useCookies();

const isLoading = ref(false);

// fake login for setting cookies
const fetchLogin = async () => {
    isLoading.value = true;

    // TO-DO prepare for real login
    // if (localStorage.getItem('login') === 'true') {
    //     isLoading.value = false;
    //     return;
    // }
    // await useAxios('/api/login/login', 'GET', null, null);
    
    localStorage.setItem('login', 'true');
    cookies.set('uniqueId', '1234567890'); // fake uniqueId
    isLoading.value = false;
  }

onMounted(async () => {
   await fetchLogin();
});

const items = ref([
    {
        label: 'Articles',
        command: () => {
            router.push('/articles');
        }
    },
    {
        label: 'A/B Testing',
        command: () => {
            router.push('/ab-testing');
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
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                  <span class="ml-2">{{ item.label }}</span>
              </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span class="ml-2">{{ item.label }}</span>
          </a>
      </template>
  </PMenubar>
</template>