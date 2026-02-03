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

    function search(event){
        if(event.key === 'Enter'){
            const query = event.target.value;
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        }
    }
</script>

<template>
    <div class="bg">
        <header @mousedown="(e)=>startDrag(e,'header')"
        ><Header></Header></header>
        <div class="txt">
            <img src="/assets/google_logo.jpg" alt="google_logo" id="googleLogo">
            <textarea name="srch" id="search" placeholder="Search.." @keydown="search"></textarea>
            <span class="material-symbols-outlined" id="micIcon">
                    mic
            </span>
            <span class="material-symbols-outlined" id="cmIcon">
                add_a_photo
            </span>
        </div>
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
.txt{
    height:10vh;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    border-bottom: 0.25px solid grey;
}
#googleLogo{
    height:8vh;
    background:white;
    border-radius:100%;
}
#search{
    border:none;
    height:4vh;
    width:70%;
    resize:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:5px;
    font-family:Arial, sans-serif;
}
#search:focus{
    outline:none;
}
#micIcon{
    font-size:2.5rem;
}
#cmIcon{
    font-size:2.5rem;
}
</style>