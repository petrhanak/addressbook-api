module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'timetodie',
      user: 'postgres',
      password: '1234',
    },

    migrations: {
      directory: './migrations',
      stub: 'migration.stub.js'
    }
  },

  production: {
    client: 'pg',
    connection: {
      port: process.env.DB_PORT || 5432,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
  },
}
