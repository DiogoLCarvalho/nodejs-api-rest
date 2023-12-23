import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    nacionalidade: { type: mongoose.Schema.Types.String },
}, { versionKey: false });

const autorModel = mongoose.model("autor", autorSchema);

export { autorModel, autorSchema }