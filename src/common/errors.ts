/* tslint:disable:max-classes-per-file */

export class ApiError extends Error {
  public type: string
  public status: number

  constructor(message: string, type: string, status: number) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.message = message
    this.name = this.constructor.name
    this.type = type
    this.status = status
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 'E_UNAUTHORIZED', 401)
  }
}

export class ValidationError extends ApiError {
  constructor(message: any) {
    super(message, 'E_VALIDATION', 400)
  }
}

export class InvalidJsonBodyError extends ApiError {
  constructor() {
    super('Request JSON body is not valid', 'E_INVALID_JSON_BODY', 400)
  }
}
