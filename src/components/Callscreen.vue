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
</script>

<template>
    <div class="callScreen">
        <header @mousedown="(e)=startDrag(e,'header')"><Header></Header></header>
        <div class="top">
        <div class="name">Bob</div>
        <div class="num">+91 44444 55555</div>
        <div class="call">Calling</div>
        </div>
        <div class="bottom">
            <div class="btn"></div>
            <div class="btn"><span class="material-symbols-outlined">
pause
</span></div>
            <div class="btn"><span class="material-symbols-outlined">
add
</span></div>
            <div class="btn"><span class="material-symbols-outlined">
mic_off
</span></div>
            <div class="btn"><span class="material-symbols-outlined">
video_camera_front
</span></div>
            <div class="btn"><span class="material-symbols-outlined">
robot_2
</span></div>
            <div class="btn"><span class="material-symbols-outlined">
volume_up
</span></div>
            <div class="btn"><span class="material-symbols-outlined">
call_end
</span><span class="material-symbols-outlined">
dialpad
</span></div>
        </div>
    </div>
</template>

<style scoped>
.callScreen{
    height:100vh;
    aspect-ratio:9/16;
    display:flex;
    flex-direction:column;
}
</style>