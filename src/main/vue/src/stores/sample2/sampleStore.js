import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useSampleStore = defineStore('sample2', () => {
    const list = ref([]);
    function addList() {
        let addData = {content1: "content1", content2: "content2", content3: "content3"}
        list.value.push(addData);
    }
    const getDataAll = computed(() => list.value);
    return { list, addList, getDataAll };
})