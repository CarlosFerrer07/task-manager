import express from 'express';
import tasksRoutes from "./routes/tasksRoutes.js";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/tasks", tasksRoutes);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
