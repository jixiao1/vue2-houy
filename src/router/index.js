import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    }
  ]
})
// 路由导航守卫
router.beforeEach((to, from, next) => {
  // to 表示去哪个路由地址

  // from 表示从哪里来

  // next()放行 next('/login)强制跳转

  if (to.path === '/login') return next()
  // 获取token值
  const tokenStr = window.sessionStorage.getItem('token')

  if (!tokenStr) return next('/login')
  return next()
})

export default router
