<script setup>
import { ref } from 'vue';

    const props = defineProps({
        time: Number
    })
    const days = ref();
    const hours = ref();
    const minutes = ref();
    const postTime = props.time;
    const curTime = Math.floor(Date.now() / 1000);
    const dif = curTime - postTime;
    hours.value = Math.floor(dif / 3600);
    minutes.value = Math.floor((dif % 3600) / 60);
    days.value = Math.floor(hours.value/24);
    hours.value = hours.value % 24;
</script>

<template>
    <span v-if="days>0"> {{ days }} days </span>
    {{ hours }} hours {{ minutes }} minutes ago
</template>