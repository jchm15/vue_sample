<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { RouterView } from 'vue-router';

import { onMounted } from "vue";
import {samplePost} from "./api/sampleService.js";


onMounted(async () => {
    let param = {
        id: "hm123",
        name: "name123",
        content: "vue123"
    }
    let rtn = await samplePost(param);
    console.log(rtn)
})
</script>

<template>
    <nav id="mynav" style="flex-direction: row;" class="nav">
        <router-link to="/">Home</router-link>  |
        <router-link to="/sample1">Event Handler </router-link>
    </nav>
    <router-view />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
