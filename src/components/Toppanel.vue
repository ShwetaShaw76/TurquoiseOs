<script setup>
    import Header from './Header.vue';
    import { computed, ref, onMounted, onUnmounted} from 'vue';
    
    const hrs=ref(0);
    const mins=ref(0);
    const d=ref(0);
    const day = ref('');

    let timer;

    const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const updateTime=()=>{
        const now=new Date();
        hrs.value=now.getHours();
        mins.value=now.getMinutes();
        d.value=now.getDate();
        day.value=days[now.getDay()];
    }

    onMounted(()=>{
        updateTime();
        timer = setInterval(updateTime(),1000);
    });

    onUnmounted(()=>{
        clearInterval(timer);
    })

    const time = computed(() => {
    const h = String(hrs.value).padStart(2,'0')
    const m = String(mins.value).padStart(2, '0')
    return `${h}:${m}`
    });
    const date = computed(() =>{
        return `${day.value},${d.value}`
    })
</script>

<template>
    <div class="topPanel">
        
    <div class="topapps">
        <div class="dt">{{ time }} {{ date }}</div>
        <div class="sett"></div>
        <div class="opt"></div>
    </div>
    </div>
</template>

<style scoped>
    .topPanel{
        background:url("/assets/forest_background.jpg");
        background-size:cover;
        background-color:rgba(0,0,0,0.3);
        height:100vh;
        aspect-ratio:9/16;
        color:white;
        text-align:center;
        z-index:-1;
    }
    .topPanel::before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(255,255,255,0.1);
        backdrop-filter:blur(2px);
    }
    .topapps{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:10px;
        backdrop-filter:blur(3px);
        height:10vh;
    }
    
</style>