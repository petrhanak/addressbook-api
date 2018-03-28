export default {
  auth: {
    cryptoRounds: 10,
    effectivePasswordLength: 72,
    secret: process.env.AUTH_SECRET,
  },
  database: {
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER,
  },
  server: {
    port: parseInt(process.env.PORT!, 10),
  },
}
