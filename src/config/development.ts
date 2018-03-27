import knexConfig from '../database/knexfile'

export default {
  auth: {
    cryptoRounds: 10,
    effectivePasswordLength: 72,
    secret: 'abc123',
  },
  database: knexConfig.development,
  server: {
    port: process.env.PORT || 3000,
  },
}
