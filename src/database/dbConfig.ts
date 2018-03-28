// IMPORTANT: this file is imported by knex, use relative paths and import * as styntax

import * as path from 'path'
import config from '../config'

export default {
  client: 'pg',
  connection: {
    database: config.database.name,
    host: config.database.host,
    password: config.database.password,
    user: config.database.user,
  },

  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
    stub: 'migration.stub',
  },

  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
  },
}
