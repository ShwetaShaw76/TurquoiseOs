<script setup></script>

<template>
    <div class="screen">
    <h1>Turquoise Os</h1>
    <div id="loading"><div class="circle"><div class="ciye"></div></div></div>
    </div>
</template>

<style scoped>
    .screen {
        display:flex;
        background-color: rgba(0, 0, 0, 0.8);
        height: 100vh;
        justify-content: center;
        align-items: center;
        aspect-ratio:9/16;
        color:white;
        text-align:center;
        flex-direction:column;
    }
    h1{
        font-size:3.5rem;
        padding:5px;
    }
    @media screen and (max-width: 600px) {
        .screen{
            width: 100vw;
            text-align:center;
        }
    }
    .circle{
        height:60px;
        width:60px;
        border-radius:50%;
        border-top:5px solid cyan;
        animation:rotate 3s infinite ease-in-out;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .ciye{
        height:40px;
        width:40px;
        border-radius:50%;
        border-top:5px solid yellow;
        animation:rotate 4s infinite ease-in-out;
    }
    #loading{
        height:80px;
        width:80px;
        border-radius:50%;
        border-top:5px solid crimson;
        animation:rotate 2s infinite ease-in-out;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    @keyframes rotate{
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
</style>