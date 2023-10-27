import { Router } from "express";
import { postPassenger } from "../controllers/posts.controller.js";
import { createPassenger } from "../schemas/posts.schemas.js";
import { validateSchema } from "../middlewares/validate.schema.js";


const passengerRouter = Router();

passengerRouter.post("/",validateSchema(createPassenger), postPassenger);

export default passengerRouter;
