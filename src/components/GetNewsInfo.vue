<script setup>
    import { ref } from 'vue';
import { useStore } from 'vuex';
import GetComments from './GetComments.vue';
import ConvertTime from './ConvertTime.vue';
    const store = useStore();
    const news = ref({});
    const props = defineProps({
        id: Number
    })
    const id = props.id;

    let len = ref();
    let called = ref(false);
    let commentShow = ref(false);
    const getNews = async() => {
        try{
            news.value = await store.dispatch('fetchItem', id);
            if(news.value.kids === undefined) len.value = 0;
            else len.value = news.value.kids.length;
            called.value = true;
        }
        catch(error) {
            console.error('Failed to fetch news:', error);
        }
    }
    getNews();
    function commentToggle(){
        if(commentShow.value === true) commentShow.value = false;
        else commentShow.value = true;
    }
</script>


<template>
    <div v-if="called === true"> 
        <span style="font-size: 40; color: red; padding-right: 20px;">
            {{ news.score }}
        </span> 
        <a :href="news.url" > {{ news.title }} </a>
        <br>
        by <router-link style="font-style: italic; color:rgb(51, 51, 255)" :to="`/user/${news.by}`">
            {{ news.by }} <br>
        </router-link> <ConvertTime :time="news.time" />
        <div v-if="len>0">
            <button v-if="commentShow === false" @click="commentToggle">
                <span style="color: teal;"> {{ len }} comment</span>
            </button> 
            <div v-else> 
                <button v-if="commentShow === true" @click="commentToggle" style="color: coral;"> hide comment </button>
                <GetComments :commentArray="news.kids"/>
            </div>
        </div>
        <div v-else style="color: rgb(124, 124, 124);"> {{ len }} comments </div>    
    </div>
    <div v-else > loading </div>
</template>
