<template>
  <div class="navtwo">
      <h1>State management Test</h1>
      <h3>Counter is :{{counter}}</h3>
      <ul v-for="i in list" v-bind:key="i">
        <li >{{i}}</li>
      </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState({
      counter:state=>state.counter,
      list:state=>state.list
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