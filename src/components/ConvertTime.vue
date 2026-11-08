<script setup>
import { ref } from 'vue';

    const props = defineProps({
        time: Number,
        variant: {
            type: String,
            default: 'post' // 'post' | 'comment'
        }
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
    <span :class="['timestamp', `timestamp--${variant}`]">
        <span class="timestamp__icon" aria-hidden="true">&#128339;</span>
        <span v-if="days>0"> {{ days }} days </span>
        {{ hours }} hours {{ minutes }} minutes ago
    </span>
</template>

<style scoped>
.timestamp {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
}

.timestamp__icon {
    font-size: 0.85em;
}

/* Posts: soft pill badge */
.timestamp--post {
    margin-top: 4px;
    padding: 1px 8px;
    font-size: 0.85rem;
    color: rgb(30, 90, 140);
    background-color: rgba(70, 130, 180, 0.15);
    border-radius: 10px;
}

/* Comments: small, muted, italic */
.timestamp--comment {
    font-size: 0.75rem;
    font-style: italic;
    color: rgb(110, 110, 110);
}

.timestamp--comment .timestamp__icon {
    display: none;
}
</style>