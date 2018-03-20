import { ApiError, InvalidJsonBodyError } from 'common/errors'
import { Context } from 'koa'
import bodyParser from 'koa-bodyparser'
import compose from 'koa-compose'

export const errorMiddleware = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    await next()
  } catch (err) {
    if (err instanceof ApiError) {
      ctx.status = err.status
      ctx.body = {
        code: err.type,
        message: err.message,
      }
    } else {
      ctx.status = 500
      ctx.body = {
        code: 'E_UNKNOWN',
        message: 'Internal Server Error',
      }
      ctx.app.emit('error', err, 500)
    }
  }
}

export const bodyParserMiddleware = bodyParser({
  onerror: () => {
    throw new InvalidJsonBodyError()
  },
})

export const globalMiddleware = compose([errorMiddleware, bodyParserMiddleware])
