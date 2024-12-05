import WishlistService from '@/services/WishlistService'
import BrowseCollectionView from '@/views/BrowseCollectionView.vue'
import BrowseMarket from '@/views/BrowseMarket.vue'
import BrowseWishlistView from '@/views/BrowseWishlistView.vue'
import DetailsView from '@/views/DetailsView.vue'
import EditView from '@/views/EditView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BrowseMarket
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      component: BrowseCollectionView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: BrowseWishlistView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
    },
    {
      path: '/new',
      name: 'new',
      component: EditView
    },
    {
      path: '/new/wish',
      name: 'new-wish',
      component: EditView,
      props: {service: new WishlistService()}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
