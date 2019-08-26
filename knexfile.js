// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3',
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   },
    // },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'pg',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  jest: {
    testEnvironment: "node",
  },

  // staging: {
  //   client: 'pg',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: {
      database: 'postgres://cfzeqascaaralk:0f780f5bbc61e917766aacfc78435f3a54496db23c4a3ca83738803aa7ca29d8@ec2-23-21-91-183.compute-1.amazonaws.com:5432/dcceqpjk5m5s3d',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: {
        directory: './data/migrations',
      }
    },
    seeds: {
      directory: './data/seeds',
    },
  }

};
