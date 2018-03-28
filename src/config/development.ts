export default {
  auth: {
    cryptoRounds: 10,
    effectivePasswordLength: 72,
    secret: 'abc123',
  },
  database: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    name: process.env.DATABASE_NAME || 'addressbook',
    password: process.env.DATABASE_PASSWORD || '1234',
    user: process.env.DATABASE_USER || 'postgres',
  },
  server: {
    port: process.env.PORT || 3000,
  },
}
