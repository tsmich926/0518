import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieListView from '../views/MovieListView.vue'
import CommunityView from '../views/CommunityView.vue'
import RecoView from '../views/RecoView.vue'
import LoginView from '../views/LoginView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MovieList',
    name: 'MovieList',
    component: MovieListView
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: RecoView
  },
  {
    path: '/Community',
    name: 'Community',
    component: CommunityView
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
