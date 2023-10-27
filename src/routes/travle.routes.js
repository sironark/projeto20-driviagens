import { Router } from "express";
import { postCity, postPassenger } from "../controllers/posts.controller.js";
import { createCity, createPassenger } from "../schemas/posts.schemas.js";
import { validateSchema } from "../middlewares/validate.schema.js";


const passengerRouter = Router();

passengerRouter.post("/",validateSchema(createPassenger), postPassenger);
passengerRouter.post("/cities",validateSchema(createCity), postCity)

export default passengerRouter;
