import app from 'index'
import request from 'supertest'

describe('server', () => {
  it('should respond with status 200', () => {
    return request(app.listen())
      .get('/')
      .expect(200)
  })
})
