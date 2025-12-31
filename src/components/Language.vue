<script setup>
    import Header from './Header.vue';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const name =  ref(null);

    console.log(name.value)

    const router = useRouter();

    const pass = () =>{
        if(name.value == null){
            prompt("Please fill the name");
        }
        else{
            router.push('/HomeScreen');
        }
    }

</script>

<template>
    
    <div class="background">
        <header><Header></Header></header>
        <div class="lower">
        <div class="prompt">
            <h1 class="heading">Device configuration</h1>
            <p>Enter name in the device :</p>
            <input type="text" name="Name" id="nm" ref="name">
            <p>Select language of your prefrence:</p>
            <select name="language" id="lang">
                <option value="english">English</option>
            </select>
            <div class="buttonhandle">
            <button class="done" @click="pass">Complete</button>
            </div>
        </div>
        
    </div>
    </div>
</template>

<style scoped>
    .background{
        display:flex;
        background: url("/assets/forest_background.jpg");
        background-position: center;
        background-size:cover;
        height:100vh;
        aspect-ratio:9/16;
        color:white;
        text-align:center;
        flex-direction:column;
    }
    .lower{
        height:100%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .prompt{
        background:rgba(255,255,255,0.9);
        height:40vh;
        width:80%;
        color:black;
        font-weight:600;
        border-radius:20px;
        border:3px solid grey;
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        flex-direction:column;
        padding:10px;
    }
    h1{
        margin:10px;
        font-size:1.75rem;
    }
    .prompt p{
        font-size:1.2rem;
    }
    #nm{
        border:0px;
        width:90%;
        height:20px;
        padding:5px;
        border-radius:10px;
        font-weight:600;
        font-size:1rem;
    }
    .heading{
        color:red;
        text-decoration: underline;
    }
    #lang{
        border:0px;
        width:95%;
        height:30px;
        padding:5px;
        border-radius:10px;
        font-weight:600;
        font-size:1rem;
        overflow:auto;
    }
    .buttonhandle{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:10px;
    }
    .done{
        display: flex;
        justify-content: center;
        align-items: center;
        height:35px;
        border-radius:10px;
        padding: 10px;
        border:0px;
        background-color:green;
        color:white;
        font-weight:600;
        font-size:1.2rem;
        cursor:pointer;
    }
</style>