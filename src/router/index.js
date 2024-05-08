import { createRouter, createWebHashHistory } from 'vue-router'
import TopNews from '../views/TopNews.vue'
import TypeNews from '../views/TypeNews.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TopNews
  },{
    path: '/topNews',
    name: 'TopNews',
    component: TopNews
  },{
    path: '/typeNews',
    name: 'TypeNews',
    component: TypeNews
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
