<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Articles',
        command: () => {
            router.push('/articles');
        }
    },
    {
        label: 'Programmatic',
        command: () => {
            router.push('/introduction');
        }
    },
    {
        label: 'A/B Testing',
        command: () => {
            router.push('/introduction');
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