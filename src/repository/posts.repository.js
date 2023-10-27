import db from "../database/database.connection.js";

export async function postPassengerDB(firstName, lastName) {
    return db.query(
      `INSERT INTO passengers("firstName", "lastName")  
      VALUES ($1, $2) 
      RETURNING id, "firstName", "lastName";`,
      [firstName, lastName]
    );
  }
