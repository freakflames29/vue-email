<template>
<Nav />

<!-- <Body :copy_sub_method="copyemailsub"/> -->

<router-view/>
<!-- <Dum/> -->

<footer class="footer is-dark">
  <div class="content has-text-centered">
    <p>
      A stupid email generator created by <strong title="a stupid coder">sourav</strong> to copy paste boring mails
    </p>
  </div>
</footer>

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
