import { Router } from "express";
import { postCity, postFlights, postPassenger, postTravels } from "../controllers/posts.controller.js";
import { createCity, createFlight, createPassenger } from "../schemas/posts.schemas.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { getFlights } from "../controllers/gets.controller.js";


const passengerRouter = Router();

passengerRouter.post("/",validateSchema(createPassenger), postPassenger);
passengerRouter.post("/cities",validateSchema(createCity), postCity);
passengerRouter.post("/flights",validateSchema(createFlight), postFlights);
passengerRouter.post("/travels", postTravels);
passengerRouter.get("/flights", getFlights);
export default passengerRouter;
