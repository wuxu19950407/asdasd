import Vue from 'vue'
import Vuex from 'vuex'
import { access } from 'fs';

Vue.use(vuex) 


export default new store({   
    state:{
        num:0
    },
    // 突变集合
    mutation:{

    },
    // 指令
    actions:{

    },
    // 提示
    getters:{
        getNum:(state)=>state.num
    }
})  