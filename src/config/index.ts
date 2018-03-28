import developmentConfig from './development'
import productionConfig from './production'

interface IConfig {
  auth: {
    cryptoRounds: number
    effectivePasswordLength: number
    secret: {
      jwt: string
    }
  }
  database: {
    firebase: {
      apiKey: string
      authDomain: string
      databaseURL: string
    }
    sql: {
      host: string
      name: string
      password: string
      user: string
    }
  }
  server: {
    port: number
  }
}

export default (process.env.NODE_ENV === 'production'
  ? (productionConfig as IConfig)
  : (developmentConfig as IConfig))
