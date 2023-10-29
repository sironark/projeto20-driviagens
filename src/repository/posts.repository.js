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

export async function getFlightsDB(){
  return db.query(`SELECT 
  f.id, c1.name AS origin, c2.name AS destination, to_char(f.date, 'DD-MM-YYYY') AS date
  FROM flights f
  JOIN cities c1 ON f.origin = c1.id 
  JOIN cities c2 ON f.destination = c2.id
  ORDER BY f.date
  ;`)
}

export async function getFlightsQueryOriginDB(origin){
  return db.query(`SELECT 
  f.id, c1.name AS origin, c2.name AS destination, to_char(f.date, 'DD-MM-YYYY') AS date
  FROM flights f
  JOIN cities c1 ON f.origin = c1.id 
  JOIN cities c2 ON f.destination = c2.id
  WHERE c1.name = $1
  ORDER BY f.date
  ;`,[origin])
}

export async function getFlightsQueryDB(origin, destination){
  return db.query(`SELECT 
  f.id, c1.name AS origin, c2.name AS destination, to_char(f.date, 'DD-MM-YYYY') AS date
  FROM flights f
  JOIN cities c1 ON f.origin = c1.id 
  JOIN cities c2 ON f.destination = c2.id
  WHERE c1.name = $1 AND c2.name = $2
  ORDER BY f.date
  ;`,[origin, destination])
}

export async function getFlightsQueryDestinationDB(destination){
  return db.query(`SELECT 
  f.id, c1.name AS origin, c2.name AS destination, to_char(f.date, 'DD-MM-YYYY') AS date
  FROM flights f
  JOIN cities c1 ON f.origin = c1.id 
  JOIN cities c2 ON f.destination = c2.id
  WHERE c2.name = $1
  ORDER BY f.date
  ;`,[destination])
}