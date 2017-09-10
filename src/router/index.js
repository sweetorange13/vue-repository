import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import List1 from '@/components/List1'
import List2 from '@/components/List2'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/home',
    	component:Home
    },
	{
		path:'/news',
		component:News,
		children: [
			{
				path:'List1',
				component: List1
			},
			{
				path:'List2',
				component: List2
			}
		]
	},
	//重定向
	{
		path:'*',
		redirect:'/home'
	} 
  ],
  linkActiveClass:'active' //更新活动链接的class类名
})
