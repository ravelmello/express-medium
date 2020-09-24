// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'medium-express',
      user:     'postgres',
      password: '123'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./src/app/database/migrations"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
