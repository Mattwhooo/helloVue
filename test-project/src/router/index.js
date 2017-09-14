import Vue from 'vue'
import Router from 'vue-router'
import HeroList from '../components/HeroList.vue'
import Hello from '../components/Hello.vue'


const routes = [
    { path: '/',  component: Hello },
    { path: '/heroes', component: HeroList}
]

var router

router = new VueRouter({
    routes
})

const routes = [
    { path: '/',  component: Hello }
]
export default new Router({
    routes
})