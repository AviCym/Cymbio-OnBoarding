// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');
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
      min: 2,
      max: 10
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