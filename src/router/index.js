import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Login from '@/view/Login'

Vue.use(Router) 
// 在VUE下添加路由功能

export default new Router({      
//对外暴露某些对象  
  routes: [
    {
      path: '/',   //路径
      name: 'HelloWorld',  
      component: HelloWorld  //指定的组件
    },
    {
      path: '/list',   //绝对路径
      name: 'List',  
      // alias:'/',      
      component: List,  //指定的组件
      children:[
        {
        path: 'login',   //相对于/list的相对路径
        // alias:'',
        name: 'Login',  
        component: Login,  //指定的组件
      }
    ]
    }
  ]
})
