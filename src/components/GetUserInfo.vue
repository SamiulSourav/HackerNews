<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    axios
    const props = defineProps({
        id: String
    })
    
    function getUrl(id) {
        let baseUlr = 'https://hacker-news.firebaseio.com/v0{/user/jl}.json?print=pretty';
        var url = baseUlr.replace('{/user/jl}', id);
        return url;
    }
    const url = getUrl(props.id);
    console.log(url);
    const user = ref({
        about: '',
        created: '',
        id: '',
        karma: '',
        submited: []
    })

    const getUser = async() => {
        try{
            const response = await axios.get(url);
            user.value = response.data;
        }
        catch(error) {
            console.error('Failed to fetch user:', error);
        }
    }
    getUser();
</script>

<template>
<p style="font-style: oblique;"> Name: {{ user.id }} </p>
<p> Karma: {{ user.karma }} </p>
<p> About: {{ user.about }} </p>
</template>