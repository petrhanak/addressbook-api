import { User } from 'database/models'
import app from 'index'
import { verifyAccessToken } from 'services/CryptoService'
import request from 'supertest'
import { resetDatabase } from '../utils'

describe('endpoint > auth', () => {
  beforeEach(async () => {
    await resetDatabase()
  })

  it('should fail for weak password', () => {
    return request(app.listen())
      .post('/signup')
      .send({
        email: 'abc@example.com',
        name: 'John Doe',
        password: '123456@$jk',
      })
      .expect(422, {
        error: {
          code: 'WeakPassword',
          message: 'This is similar to a commonly used password',
          score: 2,
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

  it('should not contain password', async () => {
    const { body } = await request(app.listen())
      .post('/signup')
      .send({
        email: 'foo@example.com',
        name: 'John Doe',
        password: '-20v3DF+facB;a}',
      })
      .expect(200)

    expect(body.user).toMatchObject({
      email: 'foo@example.com',
      name: 'John Doe',
    })
    expect(body.user).not.toHaveProperty('password')
  })

  it('should send created user account in body', async () => {
    const { body } = await request(app.listen())
      .post('/signup')
      .send({
        email: 'joHn.Doe@example.com',
        name: 'John Doe',
        password: '-20v3DF+facB;a}',
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
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUyMjE0Nzc1Mn0.Oy0MqauCaQorKmb5Hli9u6DYzPiUEHQVqjCsB4SHGwE
