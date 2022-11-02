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
  console.log(num)
  const appStore = useAppStore()
  if (!appStore.token) {
    console.log(2)
    whiteList.indexOf(to.name) !== -1
      ? next()
      : next(`/login?redirect=${to.path}`)
  }
  console.log(3)
  if (appStore.token && to.path === '/login') {
    console.log(5)

    next({ name: 'dashboard' })
  }
  console.log(1)

  next()
})

export default router
