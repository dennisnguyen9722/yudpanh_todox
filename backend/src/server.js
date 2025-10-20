import express from "express";
import tasksRoutes from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasksRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
  });
});
