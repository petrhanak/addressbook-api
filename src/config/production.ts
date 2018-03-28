export default {
  auth: {
    cryptoRounds: 10,
    effectivePasswordLength: 72,
    secret: {
      jwt: process.env.AUTH_SECRET_JWT,
    },
  },
  database: {
    firebase: {
      clientEmail: process.env.DATABASE_FIREBASE_CLIENTEMAIL,
      databaseURL: process.env.DATABASE_FIREBASE_DATABASEURL,
      privateKey: process.env.DATABASE_FIREBASE_PRIVATEKEY,
    },
    sql: {
      host: process.env.DATABASE_SQL_HOST,
      name: process.env.DATABASE_SQL_NAME,
      password: process.env.DATABASE_SQL_PASSWORD,
      user: process.env.DATABASE_SQL_USER,
    },
  },
  server: {
    port: parseInt(process.env.PORT!, 10),
  },
}
