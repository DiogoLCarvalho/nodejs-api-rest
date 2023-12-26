import mongoose from "mongoose";

// Nos campos obrigatórios você pode passar uma mensagem de erro. Basta enviar um array pro objeto.
const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: mongoose.Schema.Types.String, required: [true, "O nome do autor é obrigatório"] },
  nacionalidade: { type: mongoose.Schema.Types.String },
}, { versionKey: false });

const autorModel = mongoose.model("autor", autorSchema);

export { autorModel, autorSchema };