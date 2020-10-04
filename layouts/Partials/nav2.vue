<template>
  <div class="navtwo">
      <h1>State management Test</h1>
      <h3>Counter is :{{counter}}</h3>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState({
      counter:state=>state.counter
    })
  }
}
</script>

<style>
.navtwo{
    top: 30px;
    width: 100vw;
}
</style>