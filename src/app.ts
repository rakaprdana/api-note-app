import NoteRoutes from "./routes/note";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./config/cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/notes", NoteRoutes);
export default app;
