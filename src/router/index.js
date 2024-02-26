import {
  createRouter,
  createWebHistory
} from 'vue-router'
import MainHome from '@/views/MainHome.vue'
import Menu from '@/views/Menu.vue'
import Detail from '@/views/DetailMenu.vue'
import keranjang from '@/views/Keranjang.vue'
import sukses from '@/views/PesananSukses.vue'


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: MainHome
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/keranjang',
      name: 'keranjang',
      component: keranjang
    },
    {
      path: '/pesanan-sukses',
      name: 'pesanan-sukses',
      component: sukses
    },
  ]
})

export default router