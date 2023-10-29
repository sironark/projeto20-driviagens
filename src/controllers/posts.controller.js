import { postPassengerDB } from "../repository/posts.repository.js";
import { serviceCity, serviceFlights, serviceTravels } from "../services/travelService.js";
import httpStatus from "http-status"

export async function postPassenger(req, res) {
    const  {firstName,lastName} = req.body;
    const answare = await postPassengerDB(firstName, lastName);
    res.status(httpStatus.CREATED).send(answare.rows[0])
  }
  
export async function postCity(req, res) {
  const  {name} = req.body;
  const answare = await serviceCity(name);
  res.status(httpStatus.CREATED).send(answare.rows[0]);
}

export async function postFlights(req, res){
  const {origin, destination, date} = req.body;
  const answare = await serviceFlights(origin, destination, date);

  res.status(httpStatus.CREATED).send(answare);
}
 
export async function postTravels(req,res){
  const {passengerId, flightId} = req.body;
  const answare = await serviceTravels(passengerId, flightId);
  res.status(httpStatus.CREATED).send(answare);
}
