import Vue from 'vue'
import HeroList from './components/HeroList.vue'
import App from './components/App.vue'
import Hello from './components/Hello.vue'
import VueRouter from 'vue-router'
var app3;
Vue.use(VueRouter)
const routes = [
    { path: '/heroes', component: HeroList, name: 'heroes'},
    { path: '/',  component: Hello }

]

var router

router = new VueRouter({
    routes
})

document.addEventListener("DOMContentLoaded", function(event) {

    app3 =new Vue({
        el: '#vue',
        router,
        components: {App},
        data: {
            heroList:  [
                {id: 0, name: 'Superman', powers: ['X-Ray Vision', 'Flight', 'Super Strength'], weaknesses: ['Kryptonite']},
                {id: 1, name: 'Batman', powers: ['Rich', 'Cool Toys'], weaknesses: ['Parent Issues', 'Avoids Guns']},
                {id: 2, name: 'The Flash', powers: ['Fast'], weaknesses: ['Brick Walls']},
                {id: 3, name: 'Green Lantern', powers: ['Ultimate Power'], weaknesses: ['The Color Yellow']},
                {id: 4, name: 'Aquaman', powers: ['Controls Fish', 'Swims Well'], weaknesses: ['Bait', 'Drought']}
            ]
        }
    })
});