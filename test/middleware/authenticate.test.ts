import Koa from 'koa'
import request from 'supertest'
import { createServer } from '~/index'
import { authenticate } from '~/middleware/authenticate'
import { globalMiddleware } from '~/middleware/global'
import { createAccessToken } from '~/services/CryptoService'

describe('middleware > authenticate', () => {
  const app = createServer([
    globalMiddleware,
    authenticate,
    (ctx: Koa.Context) => {
      ctx.body = {
        user: ctx.state.user,
      }
    },
  ])

  it('should respond with Unauthorized for request without auth header', () => {
    return request(app.listen())
      .get('/')
      .expect(401, {
        error: { code: 'Unknown', message: 'Authentication Error' },
      })
  })

  it('should respond with Unauthorized for request with empty auth header', () => {
    return request(app.listen())
      .get('/')
      .set('Authorization', '')
      .expect(401, {
        error: { code: 'Unknown', message: 'Authentication Error' },
      })
  })

  it('should return user in body', () => {
    const accessToken = createAccessToken(1)

    return request(app.listen())
      .get('/')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200, {
        user: { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      })
  })

  it('should have sanitized user data', () => {
    const accessToken = createAccessToken(1)

    return request(app.listen())
      .get('/')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.user).not.toHaveProperty('password')
      })
  })
})
