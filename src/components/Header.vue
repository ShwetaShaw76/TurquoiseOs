<script setup>
    import { ref } from 'vue';
    let now=new Date();
    const hrs=ref(now.getHours());
    const mins=ref(now.getMinutes());
    const time = ref("hrs:mins")
</script>

<template>
    <header>
        <p>time</p>
    </header>
</template>

<style scoped>


</style>