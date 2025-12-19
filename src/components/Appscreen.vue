<script setup>
    import Header from './Header.vue';
</script>

<template>
    <div class="bg">
        <header><Header></Header></header>
        <div class="body">
            <div class="top">
                <div class="searchbar">
                    <span class="material-symbols-outlined" id="searchIcon">
                    search
                    </span>
                    Search
                </div>
            </div>
            <div class="apps">

            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg{
        display:flex;
        background: url("/assets/forest_background.jpg");
        background-position: center;
        background-size:cover;
        height:100vh;
        aspect-ratio:9/16;
        color:white;
        text-align:center;
        flex-direction:column;
    }
    .body{
        height:100%;
        width:100%;
        backdrop-filter:blur(2px);
        padding-top: 15px;
    }
    .top{
        width:100%;
        display:flex;
        align-items: center;
        justify-content:center;
    }
    .searchbar{
        height:20px;
        width: 85%;
        background-color:rgba(255,255,255,0.3);
        border-radius: 30px;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        padding: 15px;
        gap:20px;
        font-size:1.5rem;
    }
    #searchIcon{
        font-size:1.5rem;
    }
    .searchbar:hover{
        cursor:text;
    }
    .searchbar:focus{
        background-color:rgba(255,255,255,0.4);
        transition:all ease-in-out;
    }
    .apps{
        width:100%;
        display:grid;
    }
</style>