import { postPassengerDB } from "../repository/posts.repository.js";
import { serviceCity } from "../services/travelService.js";


export async function postPassenger(req, res) {
    const  {firstName,lastName} = req.body;
    const answare = await postPassengerDB(firstName, lastName);
    res.status(201).send(answare.rows[0])
  }
  
  export async function postCity(req, res) {
    const  {name} = req.body;
    const answare = await serviceCity(name);
    res.status(201).send(answare.rows[0])
  }
 
