import developmentConfig from './development'
import productionConfig from './production'

export default (process.env.NODE_ENV === 'production'
  ? productionConfig
  : developmentConfig)
