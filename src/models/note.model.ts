import { model, Schema } from "mongoose";

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
});

export const Note = model("Note", noteSchema);
