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
        <div class="menu"><div class="dialer">Dialer</div><div class="contact">Contacts</div></div>
        <div class="heading">Calls</div>
        <div class="calls">
        <div class="call">
            <div class="icon"><span class="material-symbols-outlined" id="icon">
                arrow_insert
            </span></div>
            <div class="nm">
                <div class="name">Bob</div>
                <div class="num">+91 44444 55555</div>
            </div>
            <div class="date">Yesterday</div>  
        <div class="brdr"></div> 
        </div>
    </div>
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
    margin-bottom:20px;
}
.menu{
    display:flex;
    flex-direction:row;
    color:white;
    gap:4px;
    border:0.5px solid grey;
    width:fit-content;
    border-radius:20px;
    margin-left:35%;
    margin-top:4px;
}
.dialer{
    padding:4px 12px;
    border-radius:20px;
}
.contact{
    padding:6px 12px;
    border-radius:20px;
    background:rgba(255,255,255,0.1);
}
.dialer:hover{
    cursor:pointer;
}
.contact:hover{
    cursor:pointer;
}
.calls{
    width:100%;
    display:flex;
    flex-direction:column;
}
.call{
    padding:5px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
}
.call:hover{
    cursor:pointer;
    background:rgba(0,0,0,0.5)
}
.name{
    font-size:1.25rem;
    color:white;
}
.num{
    font-size:1rem;
    color:grey;
    font-weight:600;
}
.date{
    font-size:1rem;
    color:grey;
    font-weight:600;
}
#icon{
    font-size:2rem;
    color:grey;
}
.brdr{
    height:1px;
    background:grey;
    margin:10px;
}
</style>