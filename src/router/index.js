import Vue from 'vue'
import VueRouter from 'vue-router'

const BaseLayout = () => import('@/views/BaseLayout')
const SimplePage = () => import('@/theme/SimplePage/SimplePage')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'BaseLayout',
    component: BaseLayout
  },
  {
    path: '/SimplePage',
    name: 'SimplePage',
    props: true,
    component: SimplePage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
