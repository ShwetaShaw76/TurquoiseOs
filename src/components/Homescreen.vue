<script setup>
    import Header from './Header.vue';
    import { useRouter } from 'vue-router';
    import { computed, ref, onMounted, onUnmounted} from 'vue';

    const router = useRouter();

    const TouchStartY = ref(0);
    const TouchEndY = ref(0);
    const minSwipeDis = 50;
    const dragSource = ref(null);

    const startDrag = (e, source) =>{
        TouchStartY.value = e.clientY;
        dragSource.value = source;
    }

    const endDrag = (e) =>{
        if (!dragSource.value) return;
        TouchEndY.value = e.clientY;
        const distance = TouchEndY.value - TouchStartY.value;
        if(dragSource.value == 'header'){
            if(distance > minSwipeDis){
                router.push('/TopPanel')
            }
        }
        if(dragSource.value == 'footer'){
            if(distance < -minSwipeDis){
                router.push('/Appscreen')
            }
        }
        dragSource.value = null;
    }
    
    const hrs=ref(0);
    const mins=ref(0);
    const d=ref(0);
    const day = ref('');
    const mnth = ref('');

    let timer;

    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const updateTime=()=>{
        const now=new Date();
        hrs.value=now.getHours();
        mins.value=now.getMinutes();
        d.value=now.getDate();
        day.value=days[now.getDay()];
        mnth.value=now.toLocaleString('default',{month:'long'});
    }

    onMounted(()=>{
        updateTime();
        timer = setInterval(updateTime,1000);
        window.addEventListener('mouseup', endDrag);
    });

    onUnmounted(()=>{
        clearInterval(timer);
        window.removeEventListener('mouseup',endDrag)
    })

    const time = computed(() => {
    const h = String(hrs.value).padStart(2,'0')
    const m = String(mins.value).padStart(2, '0')
    return `${h}:${m}`
    });
    const date = computed(() =>{
        return `${d.value}`
    })
    const crrday = computed(() =>{
        return `${day.value}`
    })
    const month = computed(()=>{
        return `${mnth.value}`
    })

    function gotoBrowser(){
        router.push('/Google')
    }

    function gotoPhone(){
        router.push('/Phone')
    }
</script>

<template>
    <div class="background">
    <header @mousedown="(e)=>startDrag(e,'header')"
        ><Header></Header>
    </header>
        <div class="midsection">
           <div class="day">{{ crrday }}</div><div class="time">{{ time }}</div><div class="date">{{ date }}{{ month }}</div>
           <div class="googleBar" @click="gotoBrowser()">
            <img src="/assets/google_logo.jpg" alt="google_logo" id="googleLogo">
            <div class="otherServ">
                <span class="material-symbols-outlined" id="micIcon">
                    mic
                </span>
                <span class="material-symbols-outlined" id="cmIcon">
                add_a_photo
                </span>
            </div>
        </div>
        </div>
        <footer>
        <div class="bottomApps" @mousedown="(e)=>startDrag(e, 'footer')">
            <div class="camera"><img src="/assets/camera_logo.jpg" alt="camera" id="cameraIcon" class="icon"></div>
            <div class="browser" @click="gotoBrowser()"><img src="/assets/chrome_logo.png" alt="chrome" id="chromeIcon" class="icon"></div>
            <div class="phone" @click="gotoPhone()"><img src="/assets/phone_logo.png" alt="phone" id="phoneIcon" class="icon"></div>
            <div class="messages"><img src="/assets/messages_logo.png" alt="" id="messagesIcon" class="icon"></div>
        </div>
        </footer>
    </div>
</template>

<style scoped>
    .background{
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
    .midsection{
        margin-left: 20px;
        padding: 10px;
        margin-top: 10vh;
        height:60vh;
        display: flex;
        justify-content:flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
    .day{
        font-size: 2.5rem;
        margin-bottom: -15px;
    }
    .time{
        font-size:5rem;
        margin-bottom:-10px;
    }
    .date{
        font-size:1.5rem;
    }
    .googleBar{
        display:flex;
        padding: 10px;
        height:40px;
        width:90%;
        background-color: rgba(255,255,255,0.8);
        border-radius: 30px;
        border: 0.0002px solid grey;
        margin-top:10vh;
        align-items: center;
        justify-content: space-between;
    }
    .googleBar:hover{
        cursor:text;
    }
    #googleLogo{
        height:40px;
        border-radius: 50%;
    }
    .otherServ{
        width:8vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    #micIcon{
        color: black;
        font-size: 2rem;
        font-weight: 700;
        padding:5px;
    }
    #micIcon:hover{
        scale: 0.9;
        cursor:pointer;
        background-color: rgba(255,255,255,0.6);
        border-radius: 50%;
    }
    #cmIcon{
        color: black;
        font-size: 2rem;
        font-weight: 700;
        padding:5px;
    }
    #cmIcon:hover{
        scale: 0.9;
        cursor:pointer;
        background-color: rgba(255,255,255,0.6);
        border-radius: 50%;
    }
    footer{
        height: 100%;
        width: 100%;
        display: flex;
        padding: 5px;
        margin-bottom: 10px;
        align-items: flex-end;
    }
    .bottomApps{
        width: 100%;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-evenly;
    }
    .icon{
        height: 70px;
        width: 70px;
        border-radius: 30%;
    }
    .icon:hover{
        cursor:pointer;
        scale: 0.85;
        transition: all ease-in-out;
    }
</style>