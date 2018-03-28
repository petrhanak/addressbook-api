import request from 'supertest'
import app from '~/index'

describe('server', () => {
  it('should respond with status 200 and welcome message', () => {
    return request(app.listen())
      .get('/')
      .expect(200, 'Addressbook API 🤖')
  })
})
