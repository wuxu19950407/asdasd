<template>
  <div class="hello">
    <p>这是注册登录的公共头部</p>
    <p>{{nfo}}</p>
    <!-- <p>{{fristName}}{{lastName}}</p> -->
    <p>{{qq}}</p>
    <button @click="s">{{sss}}</button>
    <input v-model="sss">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () { 
    return {
      msg: 'Welcome to Your Vue.js App',
      info:'我是你',
      fristName:'旭',
      lastName:'吴',
      sss:'你是谁'
    }
  },
  methods:{
    s(){
      this.qq='小  孩'
    }
  },
  computed:{
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
      }
  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

