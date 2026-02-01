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
        updateTime();
        timer = setInterval(updateTime,1000);
        window.addEventListener('mouseup', endDrag);
    });

    onUnmounted(()=>{
        clearInterval(timer);
        window.removeEventListener('mouseup',endDrag)
    })
</script>

<template>
    <div class="bg">
        <header @mousedown="(e)=>startDrag(e,'header')"
        ><Header></Header></header>
    </div>
</template>

<style scoped>
.bg{
    display:flex;
    flex-direction:column;
    height:100vh;
    aspect-ratio:9/16;
    background:rgba(255,255,255);
}
</style>