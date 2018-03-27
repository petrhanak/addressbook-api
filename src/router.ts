import compose from 'koa-compose'
import Router from 'koa-router'
import { signupController, welcomeController } from './controllers'

export const router = new Router()

router
  // welcome
  .get('/', welcomeController)

  // auth
  .post('/signup', signupController)

export const routerMiddleware = compose([
  router.routes(),
  router.allowedMethods(),
])
