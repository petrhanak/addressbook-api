import Koa from 'koa'
import compose from 'koa-compose'
import { authenticate, validate } from '~/middleware'
import { createContact } from '~/services/ContactService'
import { createContactSchema } from './schema/contactSchema'

export const createContactController = compose([
  authenticate,
  validate(createContactSchema),
  async (ctx: Koa.Context) => {
    const body = ctx.state.validatedBody

    ctx.body = await createContact({
      email: body.email,
      name: body.name,
      phone: body.phone,
    })
  },
])
