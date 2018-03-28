import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { omit, propIs } from 'ramda'
import zxcvbn from 'zxcvbn'
import { invalidCredentials, weakPasswordError } from '~/common/errors'
import config from '~/config'
import { User } from '~/database/sql/models'

export interface IAccessTokenPayload {
  userId: number
}

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, config.auth.cryptoRounds)

export const checkPasswordStrength = (password: string) => {
  const truncatedPassword = password.slice(
    0,
    config.auth.effectivePasswordLength
  )
  const passwordSecurity = zxcvbn(truncatedPassword)

  if (passwordSecurity.score <= 2) {
    throw weakPasswordError(passwordSecurity)
  }
}

export const createAccessToken = (userId: number) =>
  jwt.sign({ userId }, config.auth.secret.jwt)

export const verifyAccessToken = (accessToken: string): IAccessTokenPayload =>
  jwt.verify(accessToken, config.auth.secret.jwt) as IAccessTokenPayload

export const validateJwtPayload = (payload: object) => {
  if (!propIs(Number, 'userId', payload)) {
    throw invalidCredentials()
  }
}

export const sanitizeUser = (user: User) => omit(['password'], user)

export const validateUser = async (
  user: User | undefined,
  password: string
) => {
  if (!user) {
    throw invalidCredentials()
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    throw invalidCredentials()
  }
}

export const generateUserResponse = async (user: User) => {
  const accessToken = await createAccessToken(user.id)
  const sanitizedUser = sanitizeUser(user)

  return {
    accessToken,
    user: sanitizedUser,
  }
}
