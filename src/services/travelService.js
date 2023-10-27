import { conflictError } from "../errors/errors.js";
import converterDataFormato from "../hooks/dateFormatHook.js";
import { postCityDB, postFlightDB, verifyCity } from "../repository/posts.repository.js";

export async function serviceCity(name){
    const findCity = await verifyCity(name);
    if(findCity.rowCount) throw conflictError();

    const answare = await postCityDB(name);
    return answare
}

export async function serviceFlights(origin, destination, date){
    
    
    const answare = await postFlightDB(origin, destination, date);
    const editDate =  converterDataFormato(answare.rows[0].date)
    const newAnsware = {
        id: answare.rows[0].id,
        origin,
        destination,
        date: editDate
    }
    
    return newAnsware
}