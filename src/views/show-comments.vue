<script setup>
    import GetComments from '@/components/GetComments.vue';
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const id = route.path;
    console.log('11', id)
    const news = ref({});
        let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

    console.log(url);
    let child = [];
    let len = ref();
    let type = ref('');
    let loaded = ref(false);
    const getHead = ( async() => {
        try{
            const response = await axios.get(url);
            news.value = response.data;
            child = news.value.kids;
            len.value = child.length;
            type.value = news.value.type;
            loaded.value = true;
        }
        catch(error) {
            console.error('Failed to fetch array:', error);
        }
    })
    getHead();
</script>

<template>
    <span style="font-size: 40; color: red; padding-right: 20px;">{{ news.score }}</span> 
    <a :href="news.url" > {{ news.title }} </a><br>
    by <router-link style="font-style: italic;" :to="`/user/${news.by}`">
        {{ news.by }} <br>
    </router-link>
    <span style="color: teal;"> {{ len }} comments</span>
    <span v-if="loaded === true">
        <GetComments :commentArray="child" :type="type"/>
    </span>
</template>