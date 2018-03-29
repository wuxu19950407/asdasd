import Vue from 'vue'
import Vuex from 'vuex'
import { access } from 'fs';

Vue.use(Vuex) 


export default new Vuex.Store({   
    state:{
        num:10
    },
    // 突变集合
    mutations:{
        SET_NUM(state,n){
            state.num = n+1
        }
    },
    // 指令
    actions:{
        setNum({commit},n){   //n指的传入的实参接受用的形参
            commit('SET_NUM',n)
        }
    },
    // 提示
    getters:{
        getNum:(state)=>state.num
    }
})  