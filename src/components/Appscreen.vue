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
                <div class="calculator"><img src="/assets/calculator_logo.png" alt="calculator" id="calculatorIcon" class="icon"><p class="appName">Calculator</p></div>
                <div class="camera"><img src="/assets/camera_logo.jpg" alt="camera" id="cameraIcon" class="icon"><p class="appName">Camera</p></div>
            <div class="browser"><img src="/assets/chrome_logo.png" alt="chrome" id="chromeIcon" class="icon"><p class="appName">Chrome</p></div>
            <div class="gallery"><img src="/assets/gallery_logo.png" alt="gallery" id="galleryIcon" class="icon"><p class="appName">Gallery</p></div>
            <div class="messages"><img src="/assets/messages_logo.png" alt="" id="messagesIcon" class="icon"><p class="appName">Messages</p></div>
            <div class="music"><img src="/assets/music_logo.png" alt="music" id="musicIcon" class="icon"><p class="appName">Music</p></div>
            <div class="phone"><img src="/assets/phone_logo.png" alt="phone" id="phoneIcon" class="icon"><p class="appName">Phone</p></div>
            <div class="settings"><img src="/assets/settings_logo.webp" alt="settings" id="settingsIcon" class="icon"><p class="appName">Settings</p></div>
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
        padding-top:20px;
        display:grid;
        grid-template-columns:repeat(4,0.5fr);
        grid-template-rows: repeat(4,0.5fr);
        gap:2px;
    }
    .icon{
        height: 70px;
        width: 70px;
        border-radius: 30%;
        margin-bottom:-10px;
    }
    .icon:hover{
        cursor:pointer;
        scale: 0.85;
        transition: all ease-in-out;
    }
</style>