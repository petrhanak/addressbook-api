import { ValidationError } from 'common/errors'
import joi from 'joi'
import { IRouterContext } from 'koa-router'

export const validate = (schema: any) => (
  ctx: IRouterContext,
  next: () => Promise<any>
) => {
  const validationResult = joi.validate(ctx.request.body, schema)

  if (validationResult.error) {
    throw new ValidationError(validationResult.error.message)
  }

  ctx.state.validatedBody = validationResult.value

  return next()
}
