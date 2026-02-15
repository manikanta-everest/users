import express from "express";
import UserRoutes from './routes/userRoutes/UserRoutes'

const app = express();

app.use(express.json());
app.use("/users", UserRoutes);

export default app;
