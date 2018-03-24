import Boom from 'boom'

export enum ErrorCodes {
  UNKNOWN = 'E_UNKNOWN',
  VALIDATION = 'E_VALIDATION',
  INVALID_JSON_BODY = 'E_INVALID_JSON_BODY',
}

export const validationError = (message: any): Boom =>
  Boom.badRequest(message, {
    code: ErrorCodes.VALIDATION,
  })

export const invalidJsonBodyError = (): Boom =>
  Boom.badRequest('Request JSON body is not valid', {
    code: ErrorCodes.INVALID_JSON_BODY,
  })
