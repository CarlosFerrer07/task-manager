import * as TaskService from "../services/tasksService.js";
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getAllTask();
        res.json(tasks);
    }
    catch (error) {
        console.log(error);
        res.json(500).json({ error: "Error al obtener las tareas" });
    }
};
