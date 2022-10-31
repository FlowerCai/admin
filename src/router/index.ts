import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouterHistory
} from 'vue-router'
import routes from './routes'

const history: RouterHistory = createWebHashHistory()

const router: Router = createRouter({ history, routes })

export default router
