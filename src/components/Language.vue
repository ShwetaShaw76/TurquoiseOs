<script setup>
    import Header from './Header.vue';
</script>

<template>
    <header><Header></Header></header>
    <div class="background">

    </div>
</template>

<style scoped>
    .background{
        display:flex;
        background-color: rgba(142, 142, 236, 0.9);
        height: 100vh;
        justify-content: center;
        align-items: center;
        aspect-ratio:9/16;
        color:white;
        text-align:center;
        flex-direction:column;
    }
</style>