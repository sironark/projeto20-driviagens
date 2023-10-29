import db from "../database/database.connection.js";

export async function postPassengerDB(firstName, lastName) {
  return db.query(`
  INSERT INTO 
  passengers("firstName", "lastName")  
  VALUES ($1, $2) 
  RETURNING id, "firstName", "lastName";`,
  [firstName, lastName]);
}

export async function postCityDB(name) {
  return db.query(`
  INSERT INTO 
  cities(name)  
  VALUES ($1) 
  RETURNING id, name;`,[name]);
}

export async function verifyCityDB(city){
  return db.query(`
  SELECT * 
  FROM cities
  WHERE name = $1;`,[city]);
}

export async function verifyCityByIdDB(cityId){
  return db.query(`
  SELECT * 
  FROM cities
  WHERE id = $1;`,[cityId]);
}

export async function postFlightDB(origin, destination, date){
  return db.query(`
  INSERT INTO 
  flights(origin, destination, date)  
  VALUES ($1, $2, $3) 
  RETURNING id, origin, destination, date;`,
  [origin, destination, date]);
}

export async function verifyPassengerById(id){
  return db.query(`
  SELECT *
  FROM passengers
  WHERE id = $1;`,[id]);
}

export async function verifyFlightById(id){
  return db.query(`
  SELECT *
  FROM flights
  WHERE id = $1;`,[id]);
}

export async function postTravelDB(passengerId, flightId){
  return db.query(`
  INSERT INTO
  travels ("passengerId", "flightId")
  VALUES ($1, $2)
  RETURNING id, "passengerId", "flightId";`,
  [passengerId, flightId]);
}