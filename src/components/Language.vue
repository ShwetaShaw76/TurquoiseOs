<script setup>
    import Header from './Header.vue';
</script>

<template>
    
    <div class="background">
        <header><Header></Header></header>
    </div>
</template>

<style scoped>
    .background{
        display:flex;
        background-color: rgba(142, 142, 236, 0.9);
        height:100vh;
        aspect-ratio:9/16;
        color:white;
        text-align:center;
        flex-direction:column;
    }
</style>