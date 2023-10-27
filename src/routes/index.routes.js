import { Router } from "express";
import passengerRouter from "./travle.routes.js";



const router = Router();

router.use(passengerRouter);

export default router;
