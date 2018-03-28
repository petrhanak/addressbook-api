import firebase from 'firebase-admin'
import config from '~/config'

export default firebase
  .initializeApp({
    credential: firebase.credential.cert({
      clientEmail: config.database.firebase.clientEmail,
      privateKey: atob(config.database.firebase.privateKey),
    }),
    databaseURL: config.database.firebase.databaseURL,
  })
  .database()
