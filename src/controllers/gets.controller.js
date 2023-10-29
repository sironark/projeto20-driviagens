import { serviceGetFlights } from "../services/travelService.js";

export async function getFlights(req, res){
    const query = req.query
    const answare = await serviceGetFlights(query);
    res.send(answare);
}