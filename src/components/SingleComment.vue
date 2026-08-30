<script setup>
    import GetComments from './GetComments.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import ConvertTime from './ConvertTime.vue';
    const store = useStore();
    const props = defineProps({
        id: Number
    })
    const id =  props.id;
    let obj = ref({});
    let called = ref(false);
    let len = ref(0);
    const getData = async() => {
        try{
            obj.value = await store.dispatch('fetchItem', id);
            if(obj.value.kids !== undefined) len.value = obj.value.kids.length;
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
