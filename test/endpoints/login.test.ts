import request from 'supertest'
import { User } from '~/database/models'
import app from '~/index'
import { verifyAccessToken } from '~/services/CryptoService'
import { resetDatabase } from '../utils'

describe('endpoint > /login', () => {
  beforeAll(async () => {
    await resetDatabase()
    await User.query().insert({
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: '$2a$10$oVRCpVpaROcPZ/dwpREwsewLICK4q9R6ezmVTpSRek3NT7EJsKyuS', // Addr3ssBo0k$
    })
  })

  it('should fail for unknown email', () => {
    return request(app.listen())
      .post('/login')
      .send({
        email: 'abc@example.com',
        password: '1234',
      })
      .expect(401, {
        error: {
          code: 'InvalidCredentials',
          message: 'Login credentials are incorrect',
        },
      })
  })

  it('should fail for incorrect password ', () => {
    return request(app.listen())
      .post('/login')
      .send({
        email: 'john.doe@example.com',
        password: '1234',
      })
      .expect(401, {
        error: {
          code: 'InvalidCredentials',
          message: 'Login credentials are incorrect',
        },
      })
  })

  it('should fail for already existing user with lowercase email', async () => {
    await User.query().insert({
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: '',
    })

    return request(app.listen())
      .post('/signup')
      .send({
        email: 'joHn.Doe@example.com',
        name: 'John Doe',
        password: '-20v3DF+facB;a}',
      })
      .expect(409, {
        error: {
          code: 'DuplicateEmail',
          message: 'Email is already registered',
        },
      })
  })

  it('should send user account and access token', async () => {
    const { body } = await request(app.listen())
      .post('/login')
      .send({
        email: 'john.doe@example.com',
        password: 'Addr3ssBo0k$',
      })
      .expect(200)

    expect(body.user).toMatchObject({
      email: 'john.doe@example.com',
      id: 1,
      name: 'John Doe',
    })

    const payload = verifyAccessToken(body.accessToken)
    expect(payload).toMatchObject({ userId: 1 })
    expect(payload).not.toHaveProperty('password')
  })

  it('should be case insensitive for email', async () => {
    const { body } = await request(app.listen())
      .post('/login')
      .send({
        email: 'JohN.DoE@example.com',
        password: 'Addr3ssBo0k$',
      })
      .expect(200)

    expect(body.user).toMatchObject({
      email: 'john.doe@example.com',
      name: 'John Doe',
    })
  })

  it('should not contain password', async () => {
    const { body } = await request(app.listen())
      .post('/login')
      .send({
        email: 'john.doe@example.com',
        password: 'Addr3ssBo0k$',
      })
      .expect(200)

    expect(body.user).toMatchObject({
      email: 'john.doe@example.com',
      name: 'John Doe',
    })
    expect(body.user).not.toHaveProperty('password')
  })
})
