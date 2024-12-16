import WishlistService from '@/services/WishlistService'
import BrowseCollectionView from '@/views/BrowseCollectionView.vue'
import BrowseMarket from '@/views/BrowseMarket.vue'
import BrowseWishlistView from '@/views/BrowseWishlistView.vue'
import DetailsView from '@/views/DetailsView.vue'
import EditView from '@/views/EditView.vue'
import FollowingView from '@/views/FollowingView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'market',
      component: BrowseMarket
    },
    {
      path: '/collection/:id?',
      name: 'collection',
      component: BrowseCollectionView
    },
    {
      path: '/wishlist/:id?',
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
    },
    {
      path: '/following',
      name: 'following',
      component: FollowingView
    }
  ]
})

export default router
