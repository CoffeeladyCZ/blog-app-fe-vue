<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';

// for tracking user
const uniqueId = 'UID' + Math.random().toString(36);
if (uniqueId === null) {
    localStorage.setItem('uniqueId', uniqueId);
}
</script>

<template>
    <Navigation />
    <RouterView />
</template>
