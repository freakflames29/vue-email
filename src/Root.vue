<template>

    <h1>Hi Root</h1>
    <Dum :meth="clickfromroot" idis="balerid"/>
</template>    
<script>
import Dum from './components/Dum.vue'
export default{
    name:'Root',
    components:{
        Dum,
    },
    methods:{
        clickfromroot(pp,ab){
            alert(pp,ab);
        }
    }
}
</script>