import { Router } from "express";
import { NoteController } from "../controllers/note.controller";

const route = Router();

route.post("/", NoteController.newNote);
route.get("/", NoteController.getAllNotes);

export default route;
