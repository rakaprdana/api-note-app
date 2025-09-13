import { INote } from "../interfaces/note";
import { Note } from "../models/note.model";

export class NoteService {
  static createNote = async (data: INote) => {
    const newNote = new Note(data);
    return await newNote.save();
  };

  static getAllNotes = async () => {
    return await Note.find({ is_deleted: false });
  };

  getNoteById = async (id: string) => {
    return await Note.findById(id);
  };
}
