import {Request,Response} from "express";
import * as TaskService from "../services/tasksService.js"

export const getAllTasks = async (req: Request,res: Response) => {
    try {
        const tasks = await TaskService.getAllTask();
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.json(500).json({error: "Error al obtener las tareas"});
    }
}

export const createTask = async (req:any, res:any) => {
    try {
        const {title, description, status} = req.body;
        const newTask = await TaskService.createTask({title, description, status});
        res.status(201).json(newTask);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteTask = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const response = await TaskService.deleteTask(Number(id));
    res.status(200).json({ message: "Tarea eliminada", task: response });
  } catch (error) {
        res.status(500).json({ error: "Error al borrar la tarea con id: ", id});
    }
}