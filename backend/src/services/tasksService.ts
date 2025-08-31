import prisma from "../prisma/prisma.js";

export const getAllTask = () => prisma.tasks.findMany();