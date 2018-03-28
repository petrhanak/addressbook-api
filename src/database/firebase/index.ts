import firebase from 'firebase-admin'
import config from '~/config'

export default firebase
  .initializeApp({
    credential: firebase.credential.cert({
      clientEmail: config.database.firebase.clientEmail,
      privateKey: Buffer.from(
        config.database.firebase.privateKey,
        'base64'
      ).toString('ascii'),
    }),
    databaseURL: config.database.firebase.databaseURL,
  })
  .database()
