require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'blog_development',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'db',
  },
  test: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'blog_development',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',  // ← здесь password для тестов
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'db',
  },
};