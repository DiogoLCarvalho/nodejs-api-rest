import mongoose from "mongoose";

const quadrinhoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: mongoose.Schema.Types.String, required: [true, "O nome do quadrinho é obrigatório"]},
  descricao: {type: mongoose.Schema.Types.String, required: [true, "A descrição do quadrinho é obrigatória"]},
  segmento: {type: mongoose.Schema.Types.String},
  genero: {type: mongoose.Schema.Types.String},
  preco: {type: mongoose.Schema.Types.Number, required: [true, "O preço do quadrinho é obrigatório"]},
  autor: {type: mongoose.Schema.Types.ObjectId, ref: "autor", required: [true, "O autor é obrigatório"]},
  editora: {type: mongoose.Schema.Types.ObjectId, ref: "editora", required: [true, "A editora é obrigatória"]}
}, {versionKey: false});

const quadrinhoModel = mongoose.model("quadrinho", quadrinhoSchema);

export default quadrinhoModel;