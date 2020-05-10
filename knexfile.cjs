exports.dev = {
  ext: 'cjs',
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
    directory: './server/db/migrations'
  }
}
