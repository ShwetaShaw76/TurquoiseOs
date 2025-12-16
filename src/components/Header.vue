<script setup>
    import { computed, ref } from 'vue';
    let now=new Date();
    const hrs=ref(now.getHours());
    const mins=ref(now.getMinutes());
    const time = computed(() => {
    const h = String(hrs.value).padStart(2,'0')
    const m = String(mins.value).padStart(2, '0')
    return `${h}:${m}`
})
</script>

<template>
    <header>
        <p>{{ time }}</p>
    </header>
</template>

<style scoped>
    header{
        height:5vh;
        background-color:black;
        color:white;
       display:flex;
       align-items:center;
       padding:0px 15px;
    }

</style>