<template>
<Nav />

<!-- <Body :copy_sub_method="copyemailsub"/> -->

<router-view/>
<!-- <Dum/> -->

</template>

<script>
import Nav from './components/Nav.vue';

export default {
    name: 'Hero',
    components: {
        Nav,
    }
   
}
</script>
