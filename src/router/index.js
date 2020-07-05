import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [

  // blog routes 
  {
        path: 'one',
        name: "blog_one",
        component: () => import(/* webpackChunkName: "about" */ '@/blogs/one.vue')

  },
  {
    path: 'three',
    name: "blog_three",
    component: () => import(/* webpackChunkName: "about" */ '@/blogs/three.vue')

},
{
  path: 'four',
  name: "blog_four",
  component: () => import(/* webpackChunkName: "about" */ '@/blogs/four.vue')

},

{
  path: 'five',
  name: "blog_five",
  component: () => import(/* webpackChunkName: "about" */ '@/blogs/five.vue')

},
{
  path: 'six',
  name: "blog_six",
  component: () => import(/* webpackChunkName: "about" */ '@/blogs/six.vue')

},
{
  path: 'seven',
  name: "blog_seven",
  component: () => import(/* webpackChunkName: "about" */ '@/blogs/seven.vue')

},
{
  path: 'eight',
  name: "blog_eight",
  component: () => import(/* webpackChunkName: "about" */ '@/blogs/eight.vue')

},




  // normal routes 
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },

  {
    path: '/sectors',
    name: 'Sectors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sectors.vue')
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }, 
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  }, 
  {
    path: '/pricing',
    name: 'Pricing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pricing.vue')
  }, 
]

const router = new VueRouter({
  routes,

})

export default router
