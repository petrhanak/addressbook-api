import Boom from 'boom'
import { ErrorCodes, invalidJsonBodyError } from 'common/errors'
import { Context } from 'koa'
import bodyParser from 'koa-bodyparser'
import compose from 'koa-compose'

const createResponse = (
  message: string,
  { code = ErrorCodes.UNKNOWN, ...details }: { code?: string } = {}
) => ({
  error: {
    ...details,
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
      const error = Boom.boomify(err, {
        statusCode: err.status,
      })

      ctx.status = error.output.statusCode

      const data = error.data || {}
      ctx.body = createResponse(error.message, data)
    }
  )
}

export const bodyParserMiddleware = bodyParser({
  onerror: () => {
    throw invalidJsonBodyError()
  },
})

export const globalMiddleware = compose([errorMiddleware, bodyParserMiddleware])
