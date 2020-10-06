import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => ({
    counter: 1000,
    list:[],
  });
  
  
  export const mutations = {
    inc(state) {
      state.counter++
    },
    dec(state) {        
        state.counter--
      },
      add(state,data){
        state.list.push(data)
      }
  }
  