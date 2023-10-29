import { conflictError, incompleteDataError, notFoundError } from "../errors/errors.js";
import converterDataFormato, { converterDataDefault } from "./dateFormatService.js";
import { postCityDB, postFlightDB, postTravelDB, verifyCityByIdDB, verifyCityDB, verifyFlightById, verifyPassengerById } from "../repository/posts.repository.js";
import dayjs from "dayjs";

export async function serviceCity(name){
    const findCity = await verifyCityDB(name);
    if(findCity.rowCount) throw conflictError();

    const answare = await postCityDB(name);
    return answare
}

export async function serviceFlights(origin, destination, date){
    if(origin === destination) throw conflictError();
    
    const currentData = dayjs();
    const receivedData = dayjs(converterDataDefault(date))
   
    if(receivedData.isBefore(currentData))throw incompleteDataError('erro na data da viagem');
    
    const verifyOrigin = await verifyCityByIdDB(origin);
    const verifyDestination = await verifyCityByIdDB(destination);
    
    if (!verifyOrigin.rowCount || !verifyDestination.rowCount) throw notFoundError();

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

export async function serviceTravels(passengerId, flightId){
    const verifyPassenger = await verifyPassengerById(passengerId);
    const verifyFlight = await verifyFlightById(flightId);

    if(!verifyPassenger.rowCount || !verifyFlight.rowCount) throw notFoundError();

    const answare = await postTravelDB(passengerId, flightId);

    return answare.rows[0];
}