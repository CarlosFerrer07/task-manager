import { Router } from "express";

import * as TaskController from "../controllers/taskController.js"

const router = Router();

router.get("/",TaskController.getAllTasks);

export default router;