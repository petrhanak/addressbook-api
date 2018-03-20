import { createServer } from 'index'
import Koa from 'koa'
import { bodyParserMiddleware, errorMiddleware } from 'middleware/global'
import request from 'supertest'

describe('middleware > global', () => {
  it('should handle internal server error', () => {
    const customApp = createServer([
      errorMiddleware,
      () => {
        throw new Error()
      },
    ])

    return request(customApp.listen())
      .get('/')
      .expect(500, {
        code: 'E_UNKNOWN',
        message: 'Internal Server Error',
      })
  })

  it('should parse json request', () => {
    const customApp = createServer([
      bodyParserMiddleware,
      (ctx: Koa.Context) => {
        expect(ctx.request.body).toMatchObject({ foo: 'bar' })
        ctx.body = 'ok'
      },
    ])

    return request(customApp.listen())
      .post('/')
      .send({ foo: 'bar' })
      .expect(200, 'ok')
  })

  it('should handle malformed json body', () => {
    const customApp = createServer([
      errorMiddleware,
      bodyParserMiddleware,
      (ctx: Koa.Context) => {
        ctx.body = 'ok'
      },
    ])

    return request(customApp.listen())
      .post('/')
      .set('Content-Type', 'application/json')
      .send('{ invalid JSON body " : }')
      .expect(400, {
        code: 'E_INVALID_JSON_BODY',
        message: 'Request JSON body is not valid',
      })
  })
})
