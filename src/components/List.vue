<template>
  <div class="hello">
    <p>这是注册登录的公共头部</p>
    <p>{{nfo}}</p>
    <!-- <p>{{fristName}}{{lastName}}</p> -->
    <p>{{qq}}</p>
    <button @click="s">{{sss}}</button>
    <input v-model="sss">
    <router-view></router-view>
    <button @click="wa">点击</button>
    <p>{{wu}}</p>
    <button v-for="(num,index) in arr" :key="index" @click="yanse(index)" :class="cb==index?'blue':''">{{num}}</button>
    <p>{{getNum}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () { 
    return {
      wu:'这是一段消息',
      msg: 'Welcome to Your Vue.js App',
      info:'我是你',
      fristName:'旭',
      lastName:'吴',
      sss:'你是谁',
      arr:[1,2,3,4],
      cb:-1,
    }
  },
  methods:{
    wa(){
      this.wu = '改变消息'
    },
    s(){
      this.qq='小  孩'
    },
    yanse(index){
      this.cb = index
    }
  },
  created() {
    this.ajax.post('xinda-api/sso/login-info',this.qs.stringify({
      loginId: 12345678901,						  
      password:'46f94c8de14fb36680850768ff1b7f2a', 
      imgCode:'gb4n'	

    }))
    .then((data)=>{
      console.log(data)
    })
  },
  watch:{
    wu(){

    }
  },
  computed:{
    ...mapGetters(['getNum']),
    nfo(){
      return this.info.split('').reverse().join('')
    },
    qq:{
      get(){
        return this.fristName+' '+this.lastName;
      },
      set(newValue){
        var names = newValue.split('');
        this.fristName = names[0];
        this.lastName = names[names.length-1]
      },
  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.blue{
  background-color: blue;
}
</style>

