export default {
  type: process.env.TYPEORM_CONNECTION,
  database: process.env.TYPEORM_DATABASE,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
  }
}
