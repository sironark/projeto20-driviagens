import { Router } from "express";
import { postCity, postFlights, postPassenger } from "../controllers/posts.controller.js";
import { createCity, createFlight, createPassenger } from "../schemas/posts.schemas.js";
import { validateSchema } from "../middlewares/validate.schema.js";


const passengerRouter = Router();

passengerRouter.post("/",validateSchema(createPassenger), postPassenger);
passengerRouter.post("/cities",validateSchema(createCity), postCity);
passengerRouter.post("/flights",validateSchema(createFlight), postFlights);

export default passengerRouter;
