import { Router } from "express";
import signRouter from "./sign.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

router.use(signRouter);
router.use(usersRouter);

export default router;
