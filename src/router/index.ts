import { useAppStore } from '@/store'
import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouteRecordName,
  type RouterHistory
} from 'vue-router'
import routes from './routes'

const history: RouterHistory = createWebHashHistory()

const router: Router = createRouter({
  history,
  strict: true,
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

const whiteList: Array<RouteRecordName | null | undefined> = ['login']

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if (!appStore.token) {
    console.log(to.name)
    if (whiteList.indexOf(to.name) !== -1) {
      console.log(2)
      next()
    } else {
      console.log(3)
      next(`/login?redirect=${to.path}`)
    }
  }
  if (appStore.token && to.path === '/login') {
    next({ name: 'dashboard' })
  }
  next()
})

export default router
