<script setup>
    import Header from './Header.vue';
    import { useRouter} from 'vue-router';
    import { ref, onMounted, onUnmounted} from 'vue';

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

    onMounted(()=>{
        window.addEventListener('mouseup', endDrag);
    });

    onUnmounted(()=>{
        window.removeEventListener('mouseup',endDrag)
    })

    function endCall(){
        router.push('/Homescreen')
    }

    function dialpad(){
        router.push('/Phone')
    }

    const isActive =ref(Array(8).fill(false));

    const toggleChange=(index)=>{
        isActive.value[index] = !isActive.value[index];
    }
</script>

<template>
    <div class="callScreen">
        <div class="scnd">
            <header @mousedown="(e)=startDrag(e,'header')"><Header></Header></header>
        <div class="top">
        <div class="name">Bob</div>
        <div class="num">+91 44444 55555</div>
        <div class="call">Calling</div>
        </div>
        <div class="bottom">
            <div :class="{'bg-w':isActive[0] , 'bg-t':!isActive[0]}" @click="toggleChange(0)"><span class="material-symbols-outlined sym">
save
</span></div>
            <div :class="{'bg-w':isActive[1] , 'bg-t':!isActive[1]}" @click="toggleChange(1)"><span class="material-symbols-outlined sym">
pause
</span></div>
            <div :class="{'bg-w':isActive[2] , 'bg-t':!isActive[2]}" @click="toggleChange(2)"><span class="material-symbols-outlined sym">
add
</span></div>
            <div :class="{'bg-w':isActive[3] , 'bg-t':!isActive[3]}" @click="toggleChange(3)"><span class="material-symbols-outlined sym">
mic_off
</span></div>
            <div :class="{'bg-w':isActive[4] , 'bg-t':!isActive[4]}" @click="toggleChange(4)"><span class="material-symbols-outlined sym">
video_camera_front
</span></div>
            <div :class="{'bg-w':isActive[5] , 'bg-t':!isActive[5]}" @click="toggleChange(5)"><span class="material-symbols-outlined sym">
robot_2
</span></div>
            <div :class="{'bg-w':isActive[6] , 'bg-t':!isActive[6]}" @click="toggleChange(6)"><span class="material-symbols-outlined sym">
volume_up
</span></div>
            <div class="btn" id="end" @click="endCall"><span class="material-symbols-outlined sym">
call_end
</span></div>
            <div :class="{'bg-w':isActive[7] , 'bg-t':!isActive[7]}" @click="dialpad()"><span class="material-symbols-outlined sym">
dialpad
</span></div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.callScreen{
    height:100vh;
    aspect-ratio:9/16;
    display:flex;
    flex-direction:column;
    background:url("/assets/flower_background.jpg");
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    position:relative;
}
.scnd{
    content:"";
    backdrop-filter:blur(2px);
    inset:0;
    background: rgba(0, 0, 0, 0.4);
    position:absolute;
    z-index:1;
}
.top{
    height:40vh;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    color:white;
}
.name{
    font-size:3rem;
    font-weight:700;
}
.call{
    padding:20px;
    font-size:1rem;
    font-weight:500;
}
.btn{
    height:15vh;
    width:15vh;
    border:1px solid grey;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    box-shadow: 0px 0px 25px 0.7px rgba(255, 255, 255, 0.5) inset;
}
.bg-t{
    height:15vh;
    width:15vh;
    border:1px solid grey;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    box-shadow: 0px 0px 25px 0.7px rgba(255, 255, 255, 0.5) inset;
}
.bg-w{
    height:15vh;
    width:15vh;
    border:1px solid grey;
    background:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:grey;
    box-shadow: 0px 0px 25px 0.7px rgba(255, 255, 255, 0.5) inset;
}
.btn:hover{
    cursor:pointer;
}
.bottom{
    padding:17px;
    display: grid;
  grid-template-rows: repeat(3, 3fr);
  grid-template-columns: repeat(3, 3fr);
  gap:15px;
}
.sym{
    font-size:3rem;
}
#end{
    background-color:red;
}
</style>