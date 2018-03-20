import knexConfig from '../database/knexfile'

export default {
  database: knexConfig.production,
  server: {
    port: process.env.PORT,
  },
}
