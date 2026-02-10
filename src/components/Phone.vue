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
    })

    let num = ref('');

    function append(n){
        if(num.value.length<12){
            num.value = num.value+n;
        }
    }

    function back(){
        let k = num.value.length;
        num.value = num.value.substring(0,k-1);
    }

    function gotoContacts(){
        router.push('/Contacts')
    }
</script>

<template>
    <div class="bg">
        <header @mousedown="(e)=>startDrag(e,'header')"><Header></Header></header>
        <div class="menu"><div class="dialer">Dialer</div><div class="contacts" @click="gotoContacts()">Contacts</div></div>
        <div class="heading">Dialer</div>
        <div class="num">{{ num }}</div>
        <div class="numpad">
            <button class="btn" @click="append('1')">1</button>
            <button class="btn" @click="append('2')">2</button>
            <button class="btn" @click="append('3')">3</button>
            <button class="btn" @click="append('4')">4</button>
            <button class="btn" @click="append('5')">5</button>
            <button class="btn" @click="append('6')">6</button>
            <button class="btn" @click="append('7')">7</button>
            <button class="btn" @click="append('8')">8</button>
            <button class="btn" @click="append('9')">9</button>
            <button class="btn" @click="append('*')">*</button>
            <button class="btn" @click="append('0')">0</button>
            <button class="btn" @click="append('#')">#</button>
        </div>
        <div class="footer">
            <button class="dial"><span class="material-symbols-outlined" id="phone">
phone_in_talk
</span></button>
            <button class="back"><span class="material-symbols-outlined" id="backspace" @click="back()">
backspace
</span></button>
        </div>
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
}
.menu{
    display:flex;
    flex-direction:row;
    
    gap:4px;
    border:0.5px solid grey;
    width:fit-content;
    border-radius:20px;
    margin-left:35%;
    margin-top:4px;
}
.heading{
    margin:10px;
    font-size:3rem;
}
.dialer{
    padding:4px 12px;
    background:rgba(255,255,255,0.1);
    border-radius:20px;
}
.dialer:hover{
    cursor:pointer;
}
.contacts{
    padding:6px 12px;
    border-radius:20px;
}
.contacts:hover{
    cursor:pointer;
}
.num{
    display:flex;
    align-items:center;
    justify-content:center;
    height:15vh;
    font-size:3rem;
    color:white;
}
.numpad{
    padding-top:15px;
    padding-bottom:5px;
    display: grid;
    padding-left:35px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.btn{
    color:white;
    border:none;
    border-radius:50%;
    background:transparent;
    height:12vh;
    width:12vh;
    font-size:2rem;
}
.btn:active{
   animation:bg ease-in-out 1s 1;
}
@keyframes bg{
    0%{
        background:rgba(255,255,255,0.1);
    }
    100%{
        background:transparent;
    }
}
.footer{
    height:14vh;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
}
.dial{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    height:10vh;
    width:10vh;
    background:lightgreen;
    border:none;
}
.dial:active{
    background:green;
}
.back{
    border-radius:50%;
    height:10vh;
    width:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:transparent;
    border:none;
    
}
#phone{
    font-weight:700;
    font-size:2rem;
    color:white;
}
#backspace{
    font-weight:700;
    font-size:2rem;
    color:white;
}
.back:active{
    animation:bg ease-in-out 1s 1;
}

</style>