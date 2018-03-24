import Boom from 'boom'
import { ErrorCodes, invalidJsonBodyError } from 'common/errors'
import { Context } from 'koa'
import bodyParser from 'koa-bodyparser'
import compose from 'koa-compose'
import { pathOr } from 'ramda'

const createResponse = (message: string, code?: string) => ({
  error: {
    code,
    message,
  },
})

export const errorMiddleware = (ctx: Context, next: () => Promise<any>) => {
  return next().then(
    () => {
      if (!ctx.body) {
        ctx.body = createResponse(ctx.response.message)
      }
    },
    err => {
      const error = Boom.boomify(err)

      ctx.status = error.output.statusCode

      const errorCode = pathOr(ErrorCodes.UNKNOWN, ['data', 'code'], error)
      ctx.body = createResponse(error.message, errorCode)
    }
  )
}

export const bodyParserMiddleware = bodyParser({
  onerror: () => {
    throw invalidJsonBodyError()
  },
})

export const globalMiddleware = compose([errorMiddleware, bodyParserMiddleware])
