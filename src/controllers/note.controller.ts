import { Request, Response } from "express";
import { NoteService } from "../services/note.service";
import { responses } from "../constants";
import mongoose from "mongoose";

export class NoteController {
  static newNote = async (req: Request, res: Response) => {
    try {
      const newNote = await NoteService.createNote(req.body);
      res.status(201).json({
        success: true,
        message: responses.successCreateItem,
        newNote,
      });
    } catch (error: unknown) {
      if (error instanceof mongoose.Error.ValidationError) {
        const messages = Object.values(error.errors).map((err) => {
          err.message;
        });
      }
      res
        .status(500)
        .json({ success: false, message: responses.serverError, error });
    }
  };
  static getAllNotes = async (_: Request, res: Response) => {
    try {
      const notes = await NoteService.getAllNotes();
      if (notes.length === 0) {
        res
          .status(404)
          .json({ success: false, message: responses.errorNotFound });
      }
      res
        .status(200)
        .json({ success: true, message: responses.successGetItem, notes });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: responses.serverError,
        error: error,
      });
    }
  };
}
