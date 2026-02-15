import dotenv from "dotenv";

dotenv.config();

interface DbConfig {
  username: string;
  password: string | null;
  database: string;
  host: string;
  dialect: string;
}

const config: Record<string, any>= {
  "development": {
    "username": process.env.DB_USER as string,
    "password": process.env.DB_PASSWORD as string,
    "database": process.env.DB_NAME as string,
    "host": "localhost",
    "dialect": 'postgres'
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": 'postgres'
  },
  "production": {
    "username": process.env.PROD_DB_USER as string,
    "password": process.env.PROD_DB_PASSWORD as string,
    "database": process.env.PROD_DB_NAME as string,
    "host": process.env.PROD_DB_HOST as string,
    "dialect": 'postgres',
    "port": 5432,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
export default config;
