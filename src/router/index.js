import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Close from '../components/Close.vue';
import Calllog from '../components/Calllog.vue';
import Quot from '../components/Quot.vue';
import Norespond from '../components/Norespond.vue';
import Vendor from '../components/Vendor.vue';
import Format from '../components/Format.vue';
// import Dum from '../components/Dum.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Close',
      component: Close
    },
    {
      path: '/calllog',
      name: 'Calllog',
      component: Calllog
    },
    {
      path: '/quot',
      name: 'Quot',
      component: Quot
    },
    {
      path: '/no',
      name: 'Norespond',
      component: Norespond
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: Vendor
    },
    {
      path: '/format',
      name: 'Format',
      component: Format
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
