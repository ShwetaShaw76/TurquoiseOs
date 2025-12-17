<script setup>
    import { computed, ref, onMounted , onUnmounted} from 'vue';
    
    const hrs=ref(0);
    const mins=ref(0);

    let timer;

    const updateTime=()=>{
        let now=new Date();
        hrs.value=now.getHours();
        mins.value=now.getMinutes();
        time();
    }

    const time = computed(() => {
        const h = String(hrs.value).padStart(2,'0')
        const m = String(mins.value).padStart(2, '0')
        return `${h}:${m}`
        });

    

    const percentage=ref(null);

    onMounted(() => {
    
    if('getBattery' in navigator){
        navigator.getBattery().then((battery) => {
            
            const updateBattery = () => {
                percentage.value = Math.floor(battery.level * 100);
                
            };

            updateBattery();

            battery.addEventListener('levelchange', updateBattery());
        });
    }
    updateTime();
    timer = setInterval(updateTime,1000);
});

onUnmounted(()=>{
    clearInterval(timer);
})
    
</script>

<template>
    <header>
        <p>{{ time }}</p>
        <div class="others">
            <img src="/assets/android_wifi_bar.png" alt="wifi" class="wifi">
            <div class="battery"><div class="level" :style="{width:percentage+'%', backgroundColor: (percentage<20 ? 'red' : (percentage<80 ? 'white' : 'lightgreen')),height:'10px'}"></div></div>
            <div class="batterynodge"></div>
            <p class="percentage">{{ percentage }}%</p> 
        </div>
    </header>
</template>

<style scoped>
    header{
        height:5vh;
        background-color:rgba(0,0,0,0.8);
        color:white;
       display:flex;
       align-items:center;
       padding:0px 15px;
       font-weight:700;
        justify-content:space-between;
    }
    .others img{
        padding:4px;
    }
    .others{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:row;
    }
    .battery{
        width: 20px;
        border:3px solid white;
        
        margin:3px;
        border-radius: 5px;
    }
    .batterynodge{
        width:2px;
        height:5px;
        background-color: white;
        border:3px solid white;
        border-left:none;
        border-radius:5px;
        margin-left:-5px;
        margin-right: 3px;
    }
</style>