import { autorModel } from "../models/autor.js";
import { editoraModel } from "../models/editora.js";
import quadrinhoModel from "../models/quadrinho.js";

class QuadrinhoController{

  static async buscaQuadrinhos(req, res, next){
    try {
      const listaQuadrinhos = await quadrinhoModel.find({});
      res.status(200).json(listaQuadrinhos);
    } catch (error) {
      next(error);
    }
  }


  static async buscaQuadrinho(req, res, next){
    try {
      const idQuadrinho = req.params.id;
      const retornoQuadrinho = await quadrinhoModel.findById(idQuadrinho);

      if (retornoQuadrinho === null) {
        res.status(404).json({message: "ID não encontrado"});
        return;
      }

      res.status(200).json(retornoQuadrinho);
    } catch (error) {
      next(error);
    }
  }


  static async cadastraQuadrinho(req, res, next){
    const dadosQuadrinho = req.body;

    try {
      const resultadoAutor = await autorModel.findById(dadosQuadrinho.autor);
      const resultadoEditora = await editoraModel.findById(dadosQuadrinho.editora);
      const novoQuadrinho = {...dadosQuadrinho, autor: {...resultadoAutor._doc}, editora: {...resultadoEditora._doc}};
      const quadrinhoCadastrado = await quadrinhoModel.create(novoQuadrinho);
      res.status(201).json({message: "Quadrinho cadastrado com sucesso!", data: quadrinhoCadastrado});
    } catch (error) {
      next(error);
    }
  }


  static async atualizaQuadrinho(req, res, next){
    try {
      const idQuadrinho = req.params.id;
      const dadosQuadrinho = req.body;
      await quadrinhoModel.findByIdAndUpdate(idQuadrinho, dadosQuadrinho);
      const quadrinhoAtualizado = await quadrinhoModel.findById(idQuadrinho);
      res.status(200).json({message: "Quadrinho atualizado!", data: quadrinhoAtualizado});
    } catch (error) {
      next(error);
    }
  }


  static async deletaQuadrinho(req, res, next){
    try {
      const idQuadrinho = req.params.id;
      await quadrinhoModel.findByIdAndDelete(idQuadrinho);
      res.status(200).json({message: "Quadrinho deletado!"});
    } catch (error) {
      next(error);
    }
  }
}

export default QuadrinhoController;