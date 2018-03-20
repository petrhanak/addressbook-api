import knexConfig from '../database/knexfile'

export default {
  database: knexConfig.development,
  server: {
    port: process.env.PORT || 3000,
  },
}
