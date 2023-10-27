import { postPassengerDB } from "../repository/posts.repository.js";


export async function postPassenger(req, res) {
    const  {firstName,lastName} = req.body;
    const answare = await postPassengerDB(firstName, lastName);
    res.send(answare.rows[0])
  }
  