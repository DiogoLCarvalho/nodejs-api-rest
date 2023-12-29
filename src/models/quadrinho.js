import mongoose from "mongoose";
import { editoraSchema } from "../models/editora.js";
import { autorSchema } from "../models/autor.js";

// Min e max define o valor máximo e minimo para um model
// validate - define uma validação customizada, mas vc tem que escrever a sua própria lógica ou importar uma outra biblioteca.Ele precisa retorna um Boolean

const quadrinhoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: mongoose.Schema.Types.String, required: [true, "O nome do quadrinho é obrigatório"]},
  descricao: {
    type: mongoose.Schema.Types.String, 
    required: [true, "A descrição do quadrinho é obrigatória"],
    validate: {
      validator: value => {
        const tamanhoDescricao = value.length;
        return tamanhoDescricao >= 1 && tamanhoDescricao <= 1000;
      },
      message: "A descrição deve estar entre 1 e 1000."
    }
  },
  segmento: {type: mongoose.Schema.Types.String},
  genero: {type: mongoose.Schema.Types.String},
  preco: {
    type: mongoose.Schema.Types.Number, 
    required: [true, "O preço do quadrinho é obrigatório"],
    min: [1, "O preço deve esta entre 1 e 1000. O valor enviado foi: {VALUE}"],
    max: [10000, "O preço deve esta entre 1 e 1000. O valor enviado foi: {VALUE}"],
  },
  autor: autorSchema,
  editora: editoraSchema
}, {versionKey: false});

const quadrinhoModel = mongoose.model("quadrinho", quadrinhoSchema);

export default quadrinhoModel;