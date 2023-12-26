// Isso vai deve ser executado antes dos modelos para que o validador global seja aplicado
import "./validadorGlobal.js";
import { autorModel } from "./autor.js";
import { editoraModel } from "./editora.js";
import quadrinhoModel from "./quadrinho.js";

export {autorModel, editoraModel, quadrinhoModel};