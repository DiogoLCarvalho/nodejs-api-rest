import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: mongoose.Schema.Types.String, required: [true, "O nome da editora é obrigatório"] },
}, { versionKey: false });

const editoraModel = mongoose.model("editora", editoraSchema);

export { editoraModel, editoraSchema };