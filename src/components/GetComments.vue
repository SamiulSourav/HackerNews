<script setup>
    import SingleComment from './SingleComment.vue';
    const props = defineProps({
        commentArray: Array
    })
</script>

<template>
     <div>
        <br>
        <ul>
            <li v-for="id in props.commentArray" :key="id">
                <SingleComment :id="id" /> 
            </li>
        </ul>
    </div>
    <!-- {{ commentInfo }} -->
</template>