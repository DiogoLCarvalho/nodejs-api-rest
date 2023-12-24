import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: mongoose.Schema.Types.String, required: true },
}, { versionKey: false });

const editoraModel = mongoose.model("editora", editoraSchema);

export { editoraModel, editoraSchema };