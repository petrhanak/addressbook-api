import { duplicateEmail } from 'common/errors'
import { User } from 'database/models'
import { toLower } from 'ramda'
import {
  checkPasswordStrength,
  createAccessToken,
  hashPassword,
  sanitizeUser,
} from 'services/CryptoService'

const checkEmailDuplicity = async (email: string) => {
  const user = await User.query().findOne({ email })

  if (user) {
    throw duplicateEmail()
  }
}

export const createUser = async ({
  email,
  name,
  password,
}: {
  name: string
  email: string
  password: string
}) => {
  const lowerEmail = toLower(email)
  checkPasswordStrength(password)
  await checkEmailDuplicity(lowerEmail)

  const passwordHash = await hashPassword(password)

  const user = await User.query().insert({
    email: lowerEmail,
    name,
    password: passwordHash,
  })

  const accessToken = await createAccessToken(user.id)
  const sanitizedUser = sanitizeUser(user)

  return {
    accessToken,
    user: sanitizedUser,
  }
}
