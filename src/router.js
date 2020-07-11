import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
          path:'/',
          name:'Home',
          component:Home
        },
        {
          path:'/Kanban',
          name:'Kanban',
          component: () => import('./views/Kanban.vue')
        },
        {
          path:'/Pomodoro',
          name:'Pomodoro',
          component: () => import('./views/Pomodoro.vue')
        }
    ]
})
