import compose from 'koa-compose'
import Router from 'koa-router'
import { welcome } from './controllers'

export const router = new Router()

router.get('/', welcome)

export const routerMiddleware = compose([
  router.routes(),
  router.allowedMethods(),
])
