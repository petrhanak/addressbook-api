import firebase from 'firebase'
import config from '~/config'

export default firebase.initializeApp(config.database.firebase).database()
