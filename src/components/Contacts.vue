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
        window.removeEventListener('mouseup',endDrag);
    })</script>

<template>
    <div class="contacts">
        <header @mousedown="(e)=>startDrag(e,'header')"><Header></Header></header>
        <div class="menu"><div class="dialer">Dialer</div><div class="contacts">Contacts</div></div>
        <div class="heading">Calls</div>
    </div>
</template>

<style scoped>
.contacts{
    aspect-ratio:9/16;
    height:100vh;
    
    background:rgba(0,0,0,0.9);
    display:flex;
    flex-direction:column;
}
.heading{
    color:white;
    font-size:3rem;
    padding:5px 13px;
}
.menu{
    color:white;
    display:flex;
    flex-direction:row;
    width:fit-content;
    height:fit-content;
}
.dialer{
    padding:4px 12px;
    border-radius:20px;
}
.dialer:hover{
    cursor:pointer;
}
.contacts:hover{
    cursor:pointer;
}
</style>