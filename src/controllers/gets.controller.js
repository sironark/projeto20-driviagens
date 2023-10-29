import { serviceGetFlights } from "../services/travelService.js";

export async function getFlights(req, res){
    
    const answare = await serviceGetFlights();
    res.send(answare);
}