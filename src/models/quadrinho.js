import mongoose from "mongoose";
import { editoraSchema } from "../models/editora.js";
import { autorSchema } from "../models/autor.js";

const quadrinhoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: mongoose.Schema.Types.String, required: true},
  descricao: {type: mongoose.Schema.Types.String, required: true},
  segmento: {type: mongoose.Schema.Types.String},
  genero: {type: mongoose.Schema.Types.String},
  preco: {type: mongoose.Schema.Types.Number, required: true},
  autor: autorSchema,
  editora: editoraSchema
}, {versionKey: false});

const quadrinhoModel = mongoose.model("quadrinho", quadrinhoSchema);

export default quadrinhoModel;