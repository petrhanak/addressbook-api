require('dotenv').config() // tslint:disable-line:no-var-requires
require('~/database') // tslint:disable-line:no-var-requires

import ip from 'ip'
import Koa from 'koa'
import compose from 'koa-compose'
import config from '~/config'
import { globalMiddleware } from '~/middleware/global'
import { routerMiddleware } from '~/router'

export const createServer = (middlewares: Koa.Middleware[]) =>
  new Koa().use(compose(middlewares))

const app = createServer([globalMiddleware, routerMiddleware])

if (!module.parent) {
  const httpServer = app.listen(config.server.port, () => {
    const address = `${ip.address()}:${httpServer.address().port}`
    console.info(`Server running on ${address}`) // tslint:disable-line:no-console
  })
}

export default app
