import { Sequelize } from "sequelize";
import config from "./config/config";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password ?? undefined,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect as any,
    logging: false,
  }
);

export default sequelize;