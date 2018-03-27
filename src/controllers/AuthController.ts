import Koa from 'koa'
import compose from 'koa-compose'
import { validate } from 'middleware'
import { createUser } from 'services/UserService'
import { signupSchema } from './schema/authSchema'

export const signupController = compose([
  validate(signupSchema),
  async (ctx: Koa.Context) => {
    const body = ctx.state.validatedBody

    ctx.body = await createUser({
      email: body.email,
      name: body.name,
      password: body.password,
    })
  },
])
