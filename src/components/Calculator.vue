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

let disp = ref('0')

function clear() {
  disp.value = '0'
}

function back(){
    let n = disp.value.length;
    if(n==0){
        disp.value='0';
    }
    disp.value = disp.value.substring(0,n-1);
    
}

function append(num) {
  if (disp.value == 'A' || disp.value == '0' || disp.value == '00') {
    disp.value = num
  } else {
    disp.value += num
  }
  if (disp.value.length > 14) {
    disp.value = disp.value.substring(0, 14)
  }
}

function result(){
    disp.value = eval(disp.value);
}
</script>

<template>
  <div class="calci">
    <header @mousedown="(e)=>startDrag(e,'header')"
        ><Header></Header></header>
    <div class="display">{{ disp }}</div>
    <div class="buttons">
      <div class="btn" id="ac" @click="clear()">AC</div>
      <div class="btn" id="rem" @click="append('%')">%</div>
      <div class="btn" id="del" @click="back()">
        <span class="material-symbols-outlined" id="sym"> arrow_circle_left </span>
      </div>
      <div class="btn" id="div" @click="append('/')">/</div>
      <div class="btn" id="7" @click="append('7')">7</div>
      <div class="btn" id="8" @click="append('8')">8</div>
      <div class="btn" id="9" @click="append('9')">9</div>
      <div class="btn" id="mul" @click="append('*')">
        <span class="material-symbols-outlined" id="sym"> close </span>
      </div>
      <div class="btn" id="4" @click="append('4')">4</div>
      <div class="btn" id="5" @click="append('5')">5</div>
      <div class="btn" id="6" @click="append('6')">6</div>
      <div class="btn" id="sub" @click="append('-')">-</div>
      <div class="btn" id="1" @click="append('1')">1</div>
      <div class="btn" id="2" @click="append('2')">2</div>
      <div class="btn" id="3" @click="append('3')">3</div>
      <div class="btn" id="sum" @click="append('+')">+</div>
      <div class="btn" id="00" @click="append('00')">00</div>
      <div class="btn" id="0" @click="append('0')">0</div>
      <div class="btn" id="dec" @click="append('.')">.</div>
      <div class="btn" id="res" @click="result()">=</div>
    </div>
  </div>
</template>

<style scoped>
.calci {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  aspect-ratio: 9/16;
  color: white;
}
.display {
  padding: 0px 2vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 3rem;
  height: 25vh;
}
.buttons {
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(5, 2fr);
  grid-template-columns: repeat(4, 3fr);
  height: 60vh;
  gap: 10px;
}
.btn {
  height: 13vh;
  width: 13vh;
  border: 0.5px solid white;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 0.5px rgba(255, 255, 255, 0.5) inset;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.btn:hover {
  cursor: pointer;
  scale: 0.97;
  box-shadow: 0px 0px 15px 9px rgba(255, 255, 255, 0.5) inset;
}
#sym {
  font-size: 2.5rem;
}
#res {
  background: orange;
  font-size: 3rem;
}
#sum {
  font-size: 3rem;
}
#sub {
  font-size: 4rem;
}
</style>
