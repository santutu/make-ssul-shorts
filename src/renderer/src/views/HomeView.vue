<template>
    <div>
        <h1>Home</h1>

        <button @click="readFileTest">readFile</button>
    </div>
</template>

<script setup lang="ts">
import { readFile } from '@renderer/utils/fsUtils'

const readFileTest = async (): Promise<void> => {

    const file = await readFile("D:/dev/projects2025/electron-vue-boilerplate/src/renderer/src/views/HomeView.vue")
    console.log(file)
}   
</script>