<script setup>
    import { ref, onMounted, computed } from 'vue';
    import GetNewsInfo from '@/components/GetNewsInfo.vue';
    import { onBeforeRouteUpdate, useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    const store = useStore();

    let idArray = [];
    const page = ref([]);
    let pageNo = ref(0);
    let totalPage = ref(0);
    const route = useRoute();
    let type = route.path;
    onBeforeRouteUpdate((to, from) => {
        type = to.path;
        getArray();
        console.log(to.path);
    })
    const ids = ref([]);
    const gotData = ref(false);
    const getArray = (async () => {
        type = type.slice(1,type.length);
        await store.dispatch(`fetchApi${type}`);
        gotData.value = true;
        page.value = [];
        if(type === 'newstories') ids.value = store.getters.getNew;
        else if(type === 'topstories') ids.value = store.getters.getTop;
        else if(type === 'askstories') ids.value = store.getters.getAsk;
        else if(type === 'jobstories') ids.value = store.getters.getJob;
        else if(type === 'showstories') ids.value = store.getters.getShow
        totalPage.value = 0;

        //pagination
        for (let i = 0; i < ids.value.length; i += 10) {
            let tem = [];
            for (let j = 0; j < 10; j++){
                if (i + j === ids.value.length) break;
                tem.push (ids.value[i + j]);
            }
            totalPage.value++;
            page.value.push(tem);
        }

    });
    getArray();
    function left() {
        pageNo.value--;
    }
    function right() {
        pageNo.value++;
    }
</script>

<template>
    <div>
        <ul>
            <li v-if="gotData === false"> Getting Data ... </li>
            <li v-else v-for="id in page[pageNo]" :key="id">
                <GetNewsInfo :id="id"/>
            </li>
        </ul>
        <button v-if="pageNo !== 0" @click="left"> &lt </button> 
            page: {{ pageNo+1 }} of {{ totalPage }}
        <button v-if="pageNo !== page.length" @click="right">></button>
    </div>
</template>
