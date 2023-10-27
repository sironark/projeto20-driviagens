import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};
if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

const db = new Pool(configDatabase);
export default db;

// Verifica a conexão com o banco de dados
db.connect()
  .then(() => {
    console.log("Successful conection to database!");
  })
  .catch((err) => {
    console.error("Conection error: ", err);
  });
