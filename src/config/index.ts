import developmentConfig from './development'
import productionConfig from './production'

interface IConfig {
  auth: {
    jwt: {
      expiresIn: string | number
      secret: string
    }
    password: {
      cryptoRounds: number
      effectiveLength: number
    }
  }
  database: {
    firebase: {
      clientEmail: string
      databaseURL: string
      privateKey: string
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
