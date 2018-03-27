import bcrypt from 'bcrypt'
import { weakPasswordError } from 'common/errors'
import config from 'config'
import jwt from 'jsonwebtoken'
import { omit } from 'ramda'
import zxcvbn from 'zxcvbn'
import { User } from '../database/models'

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
  jwt.sign({ userId }, config.auth.secret)

export const verifyAccessToken = (accessToken: string): IAccessTokenPayload =>
  jwt.verify(accessToken, config.auth.secret) as IAccessTokenPayload

export const sanitizeUser = (user: User) => omit(['password'], user)
