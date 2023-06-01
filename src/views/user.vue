<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import GetUserInfo from '@/components/GetUserInfo.vue';
    const route = useRoute();
    const userId = route.path;
</script>

<template>
    <div>
        <GetUserInfo :id="userId" />
    </div>
</template>
