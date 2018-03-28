export default {
  auth: {
    cryptoRounds: 10,
    effectivePasswordLength: 72,
    secret: {
      jwt: 'abc123',
    },
  },
  database: {
    firebase: {
      apiKey:
        process.env.DATABASE_FIREBASE_APIKEY ||
        'AIzaSyA0tSO04lmNMCU_tOlLgmNaieQ1idX4Z9A',
      authDomain:
        process.env.DATABASE_FIREBASE_AUTHDOMAIN ||
        'addressbook-api-dev.firebaseapp.com',
      databaseURL:
        process.env.DATABASE_FIREBASE_DATABASEURL ||
        'https://addressbook-api-dev.firebaseio.com',
      projectId:
        process.env.DATABASE_FIREBASE_PROJECTID || 'addressbook-api-dev',
      // storageBucket: "",
      // messagingSenderId: "268667542992"
    },
    sql: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      name: process.env.DATABASE_NAME || 'addressbook',
      password: process.env.DATABASE_PASSWORD || '1234',
      user: process.env.DATABASE_USER || 'postgres',
    },
  },
  server: {
    port: process.env.PORT || 3000,
  },
}
