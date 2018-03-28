import compose from 'koa-compose'
import Router from 'koa-router'
import {
  createContactController,
  loginController,
  signupController,
  welcomeController,
} from '~/controllers'

export const router = new Router()

router
  // welcome
  .get('/', welcomeController)

  // auth
  .post('/signup', signupController)
  .post('/login', loginController)

  // contact
  .post('/contact', createContactController)

export const routerMiddleware = compose([
  router.routes(),
  router.allowedMethods(),
])
