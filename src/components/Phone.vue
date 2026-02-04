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
    <div class="bg">
        <header><Header></Header></header>
        <div class="menu"><div class="dialer">Dialer</div><div class="contacts">Contacts</div></div>
        <div class="heading">Calls</div>
    </div>
</template>

<style scoped>
.bg{
    aspect-ratio:9/16;
    height:100vh;
    background:rgba(0,0,0,0.9);
    color:white;
    display:flex;
    flex-direction:column;
    padding:10px;
}
.menu{
    display:flex;
    flex-direction:row;
    padding:7px;
    gap:4px;
    border:0.5px solid grey;
    width:fit-content;
    border-radius:20px;
}
.heading{
    margin:10px;
    font-size:3rem;
}
</style>