import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: (to) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    }

    return goTo(scrollTo)
  }
})

export default router
