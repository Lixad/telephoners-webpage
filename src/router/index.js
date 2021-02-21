import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Cooperation from '../views/Cooperation.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import History from '../views/History.vue'
import Management from '../views/Management.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aboutus',
        name: 'AboutUs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutUs.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/cooperation',
        name: 'Cooperation',
        component: Cooperation
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },
    {
        path: '/management',
        name: 'Management',
        component: Management
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router