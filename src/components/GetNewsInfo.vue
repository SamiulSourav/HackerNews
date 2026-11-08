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
    <div v-if="called === true" class="news-item">
        <div class="score" :title="`${news.score} upvotes`">
            <span class="score__value">{{ news.score }}</span>
            <span class="score__label">upvotes</span>
        </div>
        <div class="news-body">
        <a :href="news.url" > {{ news.title }} </a>
        <br>
        by <router-link style="font-style: italic; color:rgb(51, 51, 255)" :to="`/user/${news.by}`">
            {{ news.by }} <br>
        </router-link> <ConvertTime :time="news.time" variant="post" />
        <div v-if="len>0">
            <button v-if="commentShow === false" @click="commentToggle" class="comment-btn">
                <span style="color: teal;"><span class="arrow">&#9654;</span> {{ len }} comment</span>
            </button> 
            <div v-else> 
                <button v-if="commentShow === true" @click="commentToggle" class="comment-btn" style="color: coral;"><span class="arrow">&#9660;</span> hide comment </button>
                <GetComments :commentArray="news.kids"/>
            </div>
        </div>
        <div v-else class="comment-count" style="color: rgb(124, 124, 124);"> {{ len }} comments </div>
        </div>
    </div>
    <div v-else > loading </div>
</template>

<style scoped>
.news-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.score {
    flex: 0 0 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0;
    border-radius: 6px;
    background-color: rgba(220, 60, 40, 0.1);
}

.score__value {
    font-size: 1.15rem;
    font-weight: bold;
    color: rgb(200, 50, 30);
    line-height: 1.2;
}

.score__label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgb(140, 80, 70);
}

.news-body {
    flex: 1;
    min-width: 0;
}

.comment-btn {
    margin: 8px 0 4px 0;
    padding: 4px 12px;
    border: 1px solid rgb(124, 124, 124);
    border-radius: 4px;
}

.arrow {
    display: inline-block;
    width: 1em;
    font-size: 0.75em;
}

.comment-count {
    margin: 8px 0 4px 0;
}
</style>
