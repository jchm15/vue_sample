<template>
    <div class="body-text-comp mg-t40">
        <div class="body-text-comp__box">
            <button @click="addList()">추가</button>
<!--            <button @click="addList()">추가</button>-->

            <table class="table-type-b">
                <tbody>
                    <tr>
                        <td>타이틀</td>
                        <td>타이틀</td>
                        <td>타이틀</td>
                    </tr>
                    <tr v-for="(item, idx) in list" :key="idx">
                        <td>{{ item.content1 }}</td>
                        <td>{{ item.content2 }}</td>
                        <td>{{ item.content3 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script setup>
import { useSampleStore } from "@/stores/sample2/sampleStore";
import { ref, onMounted } from "vue";

const list = ref([]);
const store = useSampleStore();

function addList() {
    store.addList();
    list.value = store.getDataAll;
}

onMounted(() => {
    const addData = { content1: "content1", content2: "content2", content3: "content3" };
    store.addList(addData);

    list.value = store.getDataAll;
})
</script>

<style scoped>

</style>