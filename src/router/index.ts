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
const num: number = 0

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if (!appStore.token) {
    console.log(2)
    whiteList.indexOf(to.name) !== -1
      ? next()
      : next(`/login?redirect=${to.path}`)
  }
  if (appStore.token && to.path === '/login') {
    next({ name: 'dashboard' })
  }

  next()
})

export default router
