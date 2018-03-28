import joi from 'joi'

export const createContactSchema = joi.object().keys({
  email: joi.string().email(),
  name: joi.string().required(),
  phone: joi.string(),
})
