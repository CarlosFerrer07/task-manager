import { Router } from "express";
import * as TaskController from "../controllers/taskController.js";
const router = Router();
router.get("/getAllTasks", TaskController.getAllTasks);
router.post("/createTask", TaskController.createTask);
router.delete("/deleteTask", TaskController.deleteTask);
export default router;
