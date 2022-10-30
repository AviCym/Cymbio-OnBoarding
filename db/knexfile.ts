
// const {knexSnakeCaseMappers} = require('objection');
import knexSnakeCaseMappers from 'objection'
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexFile = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'CymbioTempENV',
      user:     'root',
      password: 'pass'
    },
    pool: {
      min: 0,
      max: 1000
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers,
  },
}
export default knexFile;