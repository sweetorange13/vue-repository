// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

//1.定义组件
// import Home from 
// var Home={
// 	template:'<h3>我是主页</h3>'
// }
// var News={
// 	template:'<h3>我是新闻</h3>'
// }

//2.配置路由
// const routes=[
// 	{path:'/home',component:Home},
// 	{path:'/news',component:News},
// 	{path:'*',redirect:'/home'} //重定向
// ]

//3.创建路由实例
// const router=new VueRouter({
// 	routes, //简写，相当于routes:routes
// 	// mode:'history', //更改模式
// 	linkActiveClass:'active' //更新活动链接的class类名
// });

//4.创建根实例并将路由挂载到Vue实例上
new Vue({
	el:'#app',
	router //注入路由
});