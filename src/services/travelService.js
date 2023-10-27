import { conflictError } from "../errors/errors.js";
import { postCityDB, verifyCity } from "../repository/posts.repository.js";

export async function serviceCity(name){
    const findCity = await verifyCity(name);
    if(findCity.rowCount) throw conflictError();

    const answare = await postCityDB(name);
    return answare
}