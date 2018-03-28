import { Contact } from '~/database/firebase/models'

export const createContact = async (data: {
  email?: string
  name: string
  phone?: string
}) => {
  const contactUrl = await Contact.push(data)

  return {
    url: contactUrl,
  }
}
