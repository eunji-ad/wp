import { createRouter, createWebHashHistory } from 'vue-router'
import contentM from '../views/contentM.vue'
import contentS from '../views/contentS.vue'
import contentT from '../views/contentT.vue'
import contentF from '../views/contentF.vue'
import contentQ from '../views/contentQ.vue'
import contentI from '../views/contentI.vue'
import contentC from '../views/contentC.vue'

const routes = [
  {
    path: '/',
    name: 'contentM',
    component: contentM
    // component: () => import(/* webpackChunkName: "contentM" */ '../views/contentM.vue')
  },
  {
    path: '/contentS',
    name: 'contentS',
    component: contentS
  },
  {
    path: '/contentT',
    name: 'contentT',
    component: contentT
  },
  {
    path: '/contentF',
    name: 'contentF',
    component: contentF
  },
  {
    path: '/contentQ',
    name: 'contentQ',
    component: contentQ
  },
  {
    path: '/contentI',
    name: 'contentI',
    component: contentI
  },
  {
    path: '/contentC',
    name: 'contentC',
    component: contentC
  },
  {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // component: () => import('../components/HelloWorld.vue') => 예시

  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
