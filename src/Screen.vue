<script setup></script>

<template>
    <div class="screen">
    <h1>Turquoise Os</h1>
    <div id="loading"></div>
    </div>
</template>

<style scoped>
    .screen {
        display:flex;
        background-color: rgba(0, 0, 0, 0.8);
        height: 100vh;
        justify-content: center;
        align-items: center;
        width:35vw;
        color:white;
        text-align:center;
    }
    @media screen and (max-width: 600px) {
        .screen{
            width: 100vw;
            text-align:center;
        }
    }
</style>