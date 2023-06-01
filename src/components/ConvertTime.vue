<script setup>
import { ref } from 'vue';

    const props = defineProps({
        time: Number
    })
    const hours = ref();
    const minutes = ref();
    const postTime = props.time;
    const curTime = Math.floor(Date.now() / 1000);
    const dif = curTime - postTime;
    hours.value = Math.floor(dif / 3600);
    minutes.value = Math.floor((dif % 3600) / 60);
</script>

<template>
    {{ hours }} hours {{ minutes }} minutes ago
</template>