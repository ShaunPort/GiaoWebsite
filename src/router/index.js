import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        redirect: '/home',
        component: () => import('../views/Main'),
        children: [
            { path: 'home', component: () => import('../views/Home') },
            { path: 'resume', component: () => import('../views/resume/Resume') },
            { path: 'blog', component: () => import('../views/blog/Blog') },
            // { path: 'project', component: () => import('../views/project/Project') },
            { path: 'showblog/:id/:title', component: () => import('../views/blog/ShowBlog') }
        ]

    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
