exports.dev = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'kyrylo',
    password: 'root',
    database: 'inst'
  },
  migrations: {
    loadExtensions: ['.cjs'],
    extension: 'cjs',
    directory: './db/migrations'
  }
}
