import request from 'supertest'
import app from '~/index'
import { createAccessToken } from '~/services/CryptoService'

const accessToken = createAccessToken(1)

describe('endpoint > /contact', () => {
  it('should fail without name', () => {
    return request(app.listen())
      .post('/contact')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({})
      .expect(422)
  })

  it('should create contact', async () => {
    const { body } = await request(app.listen())
      .post('/contact')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        email: 'alice@example.com',
        name: 'Alice Wonderland',
        phone: '123 456 789',
      })
      .expect(200)

    expect(body).toHaveProperty('url')
  })
})
