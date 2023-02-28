<template>
<label for="tick_no" class="label">Ticket Number</label>
<input class="input is-primary" type="text"  id="tick_no">
</template>

<script>
export default{
    name:'Text',
    props:{
        labelname:{
            type:String
        },
        mod:{
            type:String
        }
    }
}
</script>
