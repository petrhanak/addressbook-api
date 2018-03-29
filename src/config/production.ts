export default {
  auth: {
    jwt: {
      expiresIn: '1h',
      secret: process.env.AUTH_JWT_SECRET,
    },
    password: {
      cryptoRounds: 10,
      effectiveLength: 72,
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
