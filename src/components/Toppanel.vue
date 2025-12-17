<script setup>
    import { computed, ref, onMounted, onUnmounted} from 'vue';
    
    const hrs=ref(0);
    const mins=ref(0);
    const d=ref(0);
    const day = ref('');

    let timer;

    const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const updateTime=()=>{
        const now=new Date();
        hrs.value=now.getHours();
        mins.value=now.getMinutes();
        d.value=now.getDate();
        day.value=days[now.getDay()];
    }

    onMounted(()=>{
        updateTime();
        timer = setInterval(updateTime(),1000);
    });

    onUnmounted(()=>{
        clearInterval(timer);
    })

    const time = computed(() => {
    const h = String(hrs.value).padStart(2,'0')
    const m = String(mins.value).padStart(2, '0')
    return `${h}:${m}`
    });
    const date = computed(() =>{
        return `${day.value},${d.value}`
    })
</script>

<template>
    <div class="topPanel">
    <div class="topapps">
        <div class="dt">{{ time }} {{ date }}</div>
        <div class="sett"></div>
        <div class="opt"></div>
    </div>
    </div>
</template>

<style scoped>
    .topPanel{
        background:linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.7))
    }
</style>