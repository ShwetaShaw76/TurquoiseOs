<script setup>
    import { computed, ref, onMounted, onUnmounted} from 'vue';
    
    const hrs=ref(0);
    const mins=ref(0);
    const d=ref(0);
    const day = ref('');

    let timer;

    const active = ref(Array(11).fill(false));

    const changeColor = (index) => {
        active.value[index] = !active.value[index];
    };

    const barHeight = ref(40);
    const volumeLevel = ref(40);
    const brightnessLevel = computed(() => (barHeight.value/100)*1.5);

    const changeBrightness = (event) => {
        event.preventDefault();
        const startY = event.clientY;

        const onPointerMove = (moveEvent) => {
            const deltaY = startY - moveEvent.clientY;
            if (deltaY > 0) {
                changeHeight();
            } else {
                decreaseHeight();
            }
        };

        const oPointerUp = () => {
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', oPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', oPointerUp);
    };

    const changeVolume = (event)=>{
        event.preventDefault();
        const currentY = event.clientY;

        const onMouseMove = (moveEvent) => {
            const changeInY = currentY - moveEvent.clientY;
            if (changeInY > 0) {
                increaseVolume();
            } else {
                decreaseVolume();
            }
        };

        const onMouseUp = () => {
            window.removeEventListener('pointermove', onMouseMove);
            window.removeEventListener('pointerup', onMouseUp);
        };

        window.addEventListener('pointermove', onMouseMove);
        window.addEventListener('pointerup', onMouseUp);
    }

const changeHeight = () => {
  if (barHeight.value < 100) {
    barHeight.value += 5;
  }
};

const decreaseHeight=()=>{
    if(barHeight.value>0){
        barHeight.value -=5;
    }
};

const increaseVolume = () => {
  if (volumeLevel.value < 100) {
    volumeLevel.value += 5;
    window.setVolume(volumeLevel.value/100);
  }
};

const decreaseVolume=()=>{
    if(volumeLevel.value > 0){
        volumeLevel.value -= 5;
        window.setVolume(volumeLevel.value/100);
    }
};

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
    <div class="mode" ref="mode" :style="{ filter: `brightness(${brightnessLevel})` }">
    <div class="topPanel">
        
    <div class="topapps">
        <div class="dt"><div class="time">{{ time }}</div><div class="date">{{ date }}</div></div>
        <div class="right"><div class="sett"><span class="material-symbols-outlined" id="settingIcon">
settings
</span></div>
        <div class="opt"><span class="material-symbols-outlined" id="optionsIcon">
more_vert
</span></div>
</div>
    </div>
    <div class="secondHalf">
        <div class="secLeft">
            <div class="wifi" :class="{active:active[9]}" @click="changeColor(9)"><span class="material-symbols-outlined" id="wifiIcon">
wifi
</span><p class="wifiText">WiFi</p></div>
        <div class="bluetooth" :class="{active:active[10]}" @click="changeColor(10)"><span class="material-symbols-outlined" id="bluetoothIcon">
bluetooth
</span><p class="bluetoothText">Bluetooth</p></div>
    </div>
    <div class="secRight">
        <div class="brightness" @pointerdown="changeBrightness"><span class="material-symbols-outlined" id="sunIcon">
clear_day
</span><div class="brightnessBar" :style="{height: barHeight+'%'}" ></div></div>
        <div class="audio" @pointerdown="changeVolume"><span class="material-symbols-outlined" id="volumeIcon">
volume_up
</span><div class="volumeBar" :style="{height: volumeLevel+'%'}"></div></div>
    </div>
    </div>
    <div class="apps">
        <div class="app" :class="{active:active[0]}" @click="changeColor(0)"><span class="material-symbols-outlined icons">
arrow_upward_alt
</span><span class="material-symbols-outlined icons">
arrow_downward_alt
</span></div>
        <div class="app" :class="{active:active[1]}" @click="changeColor(1)"><span class="material-symbols-outlined icons">
notifications
</span></div>
        <div class="app" :class="{active:active[2]}" @click="changeColor(2)"><span class="material-symbols-outlined icons">
flashlight_off
</span></div>
        <div class="app" :class="{active:active[3]}" @click="changeColor(3)"><span class="material-symbols-outlined icons">
location_on
</span></div>
        <div class="app" :class="{active:active[4]}" @click="changeColor(4)"><span class="material-symbols-outlined icons">
flight
</span></div>
        <div class="app" :class="{active:active[5]}" @click="changeColor(5)"><span class="material-symbols-outlined icons">
mobile_rotate
</span></div>
        <div class="app" :class="{active:active[6]}" @click="changeColor(6)"><span class="material-symbols-outlined icons">
do_not_disturb_off
</span></div>
        <div class="app" :class="{active:active[7]}" @click="changeColor(7)"><span class="material-symbols-outlined icons">
wifi_tethering
</span></div>
        <div class="app" :class="{active:active[8]}" @click="changeColor(8)"><span class="material-symbols-outlined icons">
energy_program_saving
</span></div>
    </div>
    </div>
    </div>
</template>

<style scoped>
    .mode{
        height:100%;
        width:100%;
    }
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
        
        z-index:-1;
    }
    #settingIcon{
        font-size:2rem;
    }
    #settingIcon:hover{
        cursor: pointer;
    }
    #optionsIcon{
        font-size:2rem;
    }
    #optionsIcon:hover{
        cursor: pointer;
    }
    .topapps{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:15px;
        backdrop-filter:blur(1px);
        height:10vh;
    }
    .dt{
        padding: 10px;
        
        font-weight:500;
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-direction:column;
    }
    .time{
        font-size:2.5rem;
        font-weight:600;
    }
    .date{
        font-size: 1.5rem;
        font-weight:400;
    }
    .right{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 5vw;
        font-size: 2rem;
    }
    .secondHalf{
        backdrop-filter: blur(1px);
        height: 20vh;
        padding:7px;
        display: flex;
    }
    .secLeft{
        padding-left:5px;
    }
    .wifi.active{
    background-color: skyblue;     
    }
    .bluetooth.active {
    background-color: skyblue;
    }
    .wifi{
        display: flex;
        background-color: rgba(0,0,0,0.7);
        width:190px;
        height:70px;
        border-radius: 40px;
        backdrop-filter: blur(2px);
        border: 0.0002px solid grey;
        margin:10px;
        justify-content: center;
        align-items: center;
        gap:15px;
        
    }
    .wifi:hover{
        cursor: pointer;
    }
    .bluetooth:hover{
        cursor: pointer;
    }
    .bluetooth{
        display: flex;
        background-color: rgba(0,0,0,0.7);
        width:190px;
        height:70px;
        border-radius: 40px;
        backdrop-filter: blur(2px);
        border: 0.0002px solid grey;
        margin:10px;
        justify-content: center;
        align-items: center;
        gap:10px;
    }
    #wifiIcon{
        font-size:2rem;
    }
    #bluetoothIcon{
        font-size:2rem;
    }
    .secRight{
        display:flex;
    }
    .brightness{
        height:160px;
        width:70px;
        display: flex;
        background-color: rgba(0,0,0,0.7);
        border-radius: 40px;
        backdrop-filter: blur(2px);
        border: 0.0002px solid grey;
        margin:5px;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
    }
    .audio{
        height:160px;
        width:70px;
        display: flex;
        background-color: rgba(0,0,0,0.7);
        border-radius: 40px;
        backdrop-filter: blur(2px);
        border: 0.0002px solid grey;
        margin:5px;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
    }
    #volumeIcon{
        padding:20px;
        font-size: 2rem;
        position:relative;
    }
    #sunIcon{
        padding:20px;
        font-size: 2rem;
        position:relative;
    }
    .volumeBar{
        position:absolute;
        width:100%;
        transition:height 0.2s ease-in-out;
        background-color:rgba(255,255,255,0.6);
    }
    .volumeBar:hover{
        cursor: pointer;
    }
    .brightnessBar{
        position:absolute;
        width:100%;
        transition:height 0.2s ease-in-out;
        background-color:rgba(255,255,255,0.6);
    }
    .brightnessBar:hover{
        cursor: pointer;
    }
    .apps{
        margin:25px;
        margin-left:40px;
        
        backdrop-filter: blur(1px);
        display: grid;
        grid-template-columns:repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        gap:20px;
    }
    .app{
        display:flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(2px);
        background-color: rgba(0,0,0,0.7);
        height: 90px;
        width: 90px;
        border-radius: 50%;
        border: 0.0002px solid grey;
    }
    .icons{
        font-size: 2rem;
    }
    .app:hover{
        cursor: pointer;
        background-color: rgba(0,0,0,0.6);
    }
    .app.active{
        background-color: skyblue;
    }
</style>