import prisma from "../prisma/prisma.js";
// Obtener todas las tareas
export const getAllTask = () => prisma.tasks.findMany();
// Crear tarea
export const createTask = async (data) => {
    return await prisma.tasks.create({
        data,
    });
};
// Eliminar tarea
export const deleteTask = async (id) => {
    return await prisma.tasks.delete({
        where: { id },
    });
};
