import Knex from 'knex'
import { Model } from 'objection'
import { knexSnakeCaseMappers } from 'objection'
import config from '../config'

const knex = Knex(Object.assign({}, config.database, knexSnakeCaseMappers()))

Model.knex(knex)

export default knex
