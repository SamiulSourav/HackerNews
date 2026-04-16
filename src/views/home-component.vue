<script setup>
import { ref } from "vue";
import GetNewsInfo from "@/components/GetNewsInfo.vue";
import { useStore } from "vuex";
const store = useStore();
const gotData = ref(false);

const page = ref([]);
let pageNo = ref(0);
let totalPage = ref(0);
const ids = ref([]);
page.value = [];
const getArray = async () => {
    await store.dispatch("fetchBestApi");
    gotData.value = true;
    ids.value = store.getters.getBest;
    totalPage.value = 0;

    //pagination
    for (let i = 0; i < ids.value.length; i += 10) {
        let tem = [];
        for (let j = 0; j < 10; j++) {
            if (i + j === ids.value.length) break;
            tem.push(ids.value[i + j]);
        }
        totalPage.value++;
        page.value.push(tem);
    }
};

getArray();
function left() {
    pageNo.value--;
}
function right() {
    pageNo.value++;
}
</script>

<template>
    <div style="text-align: center">
        <h1 style="font-family: 'Courier New', Courier, monospace;"> [ --- Welcome to HackerNews --- ] </h1>
    </div>
    <div style="align-items: center; display: flex; flex-direction: column;  justify-content: center;">
        <h4>Today's best news:</h4>
        <div>
            <ul>
                <li v-if="gotData === false">Getting Data ...</li>
                <li v-else v-for="id in page[pageNo]" :key="id">
                    <GetNewsInfo :id="id" />
                </li>
            </ul>
            <div style="text-align: center">
                <button v-if="pageNo !== 0" @click="left">&lt</button>
                page: {{ pageNo + 1 }} of {{ totalPage }}
                <button v-if="pageNo !== page.length" @click="right">></button>
            </div>
        </div>
    </div>
</template>
