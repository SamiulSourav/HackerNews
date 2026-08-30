<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    const props = defineProps({
        id: String
    })
    const id = props.id.replace('/user/', '');
    const user = ref({
        about: '',
        created: '',
        id: '',
        karma: '',
        submited: []
    })

    const getUser = async() => {
        try{
            user.value = await store.dispatch('fetchUser', id);
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
