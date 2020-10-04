<template>
    
    <section class="container">
        <Navtwo/>
        <h1>Hi i am About page</h1>
        <p class="subheading">Trying VueX</p>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
        <div class="buttons">
        <button v-on:click="decrement">-</button>
        <h1>Counter is : {{counter}} </h1>
        <button v-on:click="increment">+</button>
        </div>
    </section>
</template>

<script>
import Navtwo from '../layouts/Partials/nav2'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
      computed:{
        ...mapState({
            counter:state=>state.counter
        })
    },
    components:{
        Navtwo
    },
  head: {
    title: 'About',
    meta: [
      { name: 'description', content: 'Hi i am Nuxtjs About PAge' },
      { name: 'keyword', content: 'nuxtjs About vuejs' },
      
    ],
  },

    data(){
        return{
             message:'',
        }
    },
  
  methods:{
       ...mapMutations({
            increment:"increment",
            decrement:"decrement"
          }),
      decrement:function(e){
          console.log("IN dec");
           this.$store.commit('dec')
          
          
      },
      increment:function(e){
           this.$store.commit('inc')
      }
  }

  
}
</script>

<style>

.buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 10000px;
}
button{
    width: 100px;
    height: 36px;
    background-color: black;
    color: white;
    font-size: xx-large;
    align-items: center;
    border-radius: 9999px;
}
button:hover{
    background-color: lightgray;
    color: black;
}
</style>