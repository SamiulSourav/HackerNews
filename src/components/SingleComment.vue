<script setup>
    import axios from 'axios';
    import GetComments from './GetComments.vue';
import { callWithErrorHandling, computed, ref, watch } from 'vue';
import ConvertTime from './ConvertTime.vue';
    const props = defineProps({
        id: Number
    })
    const id =  props.id;
    let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    // console.log(url);
    let obj = ref({});
    let called = ref(false);
    let len = ref(0);
    const getData = async() => {
        try{
            const response = await axios.get(url);
            obj.value = response.data;
            if(obj.value.kids !== undefined) len = obj.value.kids.length;
            called.value = true;
        }
        catch(error) {
            console.error('Failed to fetch array:', error);
        }
    } 
    getData();


    let showReply = ref(false);
    function toggleReply(){
        if(showReply.value === true) showReply.value = false;
        else showReply.value = true;
    }
</script>

<template>
    <span v-if="called === true"> 
        <span v-html="obj.text"> </span>
        <!-- {{ obj.text }}  -->
        <br> by <router-link style="font-style: italic; color:rgb(51, 51, 255)" :to="`/user/${obj.by}`">
            {{ obj.by }} <br>
        </router-link> 
        <ConvertTime :time="obj.time"/>
        <div v-if="len > 0">
            <button v-if="showReply === false" style="background-color: rgba(9, 255, 255, 0.201);" @click="toggleReply"> 
                {{ len }} reply 
            </button>
            <button v-else style="background-color: rgba(240, 128, 128, 0.342);" @click="toggleReply"> 
                hide reply 
            </button>
            <div v-if="showReply === true"> <GetComments :commentArray="obj.kids"/> </div>
        </div>
    </span>
    <span v-else> loading </span>
    <!-- -> {{ obj }} -->
</template>