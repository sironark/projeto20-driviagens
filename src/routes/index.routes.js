import { Router } from "express";
import passengerRouter from "./posts.routes.js";


const router = Router();

router.use(passengerRouter);

export default router;
