import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path: '/create',
            component: ()=>import('./components/TodoApp.vue')
        },
        {
            path:'/edit',
            component: ()=>import('./components/TodoList.vue')
        }
    ]
})