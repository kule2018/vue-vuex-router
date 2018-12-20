import Vue from 'vue'
import Router from 'vue-router'

// 按需加载
const Home = (resolve => {
    require.ensure(['./views/Home.vue'], () => {
        resolve(require('./views/Home.vue'))
    })
})
const About = (resolve => {
    require.ensure(['./views/About.vue'], () => {
        resolve(require('./views/About.vue'))
    })
})
const FormDemo = (resolve => {
    require.ensure(['./views/FormDemo.vue'], () => {
        resolve(require('./views/FormDemo.vue'))
    })
})
const AudioDemo = (resolve => {
    require.ensure(['./views/AudioDemo.vue'], () => {
        resolve(require('./views/AudioDemo.vue'))
    })
})
const Xgplayer = (resolve => {
    require.ensure(['./views/Xgplayer.vue'], () => {
        resolve(require('./views/Xgplayer.vue'))
    })
})

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
    mode: 'history',
    base: base,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/form',
            name: 'form',
            component: FormDemo,
        },
        {
            path: '/audio',
            name: 'audio',
            component: AudioDemo,
        },
        {
            path: '/xgplayer',
            name: 'xgplayer',
            component: Xgplayer,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})
