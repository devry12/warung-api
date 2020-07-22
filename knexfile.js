// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '103.146.203.15',
      user: 'devryka1_warung',
      password: '9ZAHwh2SjBWqPeH',
      database: 'devryka1_warung',
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '103.146.203.15',
      user: 'devryka1_warung',
      password: '9ZAHwh2SjBWqPeH',
      database: 'devryka1_warung',
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
    client: 'mysql',
    connection: {
      host: '103.146.203.15',
      user: 'devryka1_warung',
      password: '9ZAHwh2SjBWqPeH',
      database: 'devryka1_warung',
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
