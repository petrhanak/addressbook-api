import knexConfig from '../database/knexfile'

export default {
  auth: {
    cryptoRounds: 10,
    effectivePasswordLength: 72,
    secret: process.env.AUTH_SECRET,
  },
  database: knexConfig.production,
  server: {
    port: parseInt(process.env.PORT!, 10),
  },
}
