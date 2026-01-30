<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
</script>

<template>
    <div class="calci">
        <div class="display"></div>
        <div class="buttons">
            <div class="btn" id="ac">AC</div>
            <div class="btn" id="rem">%</div>
            <div class="btn" id="del"><span class="material-symbols-outlined" id="sym">
arrow_circle_left
</span></div>
            <div class="btn" id="div"></div>
            <div class="btn" id="7">7</div>
            <div class="btn" id="8">8</div>
            <div class="btn" id="9">9</div>
            <div class="btn" id="mul"><span class="material-symbols-outlined" id="sym">
close
</span></div>
            <div class="btn" id="4">4</div>
            <div class="btn" id="5">5</div>
            <div class="btn" id="6">6</div>
            <div class="btn" id="sub">-</div>
            <div class="btn" id="1">1</div>
            <div class="btn" id="2">2</div>
            <div class="btn" id="3">3</div>
            <div class="btn" id="sum">+</div>
            <div class="btn" id="00">00</div>
            <div class="btn" id="0">0</div>
            <div class="btn" id="dec">.</div>
            <div class="btn" id="res">=</div>
        </div>
    </div>
</template>

<style scoped>
.calci{
    display:flex;
    flex-wrap:nowrap;
    flex-direction:column;
    background:rgba(0,0,0,0.9);
    height:100vh;
    aspect-ratio:9/16;
    color:white;
}
.display{
    padding:5px;
    display:flex;
    justify-content:flex-end;
    height:25vh;
}
.buttons{
    padding:10px;
    display:grid;
    grid-template-rows:repeat(5,2fr);
    grid-template-columns:repeat(4,3fr);
    height:60vh;
    gap:10px;
}
.btn{
    height:13vh;
    width:13vh;
    border:0.5px solid white;
    border-radius:100%;
    box-shadow:0px 0px 5px 0.5px rgba(255,255,255,0.5) inset;
    background:rgba(255,255,255,0.12);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
}
.btn:hover{
    cursor:pointer;
    scale:0.97;
    box-shadow:0px 0px 15px 9px rgba(255,255,255,0.5) inset;
}
#sym{
    font-size:2.5rem;
}
</style>