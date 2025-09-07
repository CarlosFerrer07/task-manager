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
export const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const newTask = await TaskService.createTask({ title, description, status });
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteTask = async (req, res) => {
    const id = req.body.id;
    try {
        const response = await TaskService.deleteTask(id);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error: "Error al borrar la tarea con id: ", id });
    }
};
