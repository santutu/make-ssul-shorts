<script setup lang="ts">
import { Button } from 'primevue';
import { ref } from 'vue';

const test = ref('test');
</script>

<template>
    <div>{{ test }}</div>

    <Button>test btn</Button>
</template>