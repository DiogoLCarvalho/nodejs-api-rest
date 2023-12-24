import { autorModel } from "../models/autor.js";

class AutorController {


  static async buscaAutores(req, res, next){
    try {
      const resultadoAutores = await autorModel.find({});
      res.status(200).json(resultadoAutores);
    } catch (error) {
      next(error);
    }
  }


  static async buscaAutor(req, res, next){
    try {
      const idAutor = req.params.id;
      const resultadoAutor = await autorModel.findById(idAutor);

      if (resultadoAutor === null) {
        res.status(404).json({message: "ID não encontrado"});
        return;
      }

      res.status(200).json(resultadoAutor);
    } catch (error) {
      next(error);
    }
  }


  static async cadastroAutor(req, res, next){
    try {
      const dadosAutor = req.body;
      const autorCadastrado = await autorModel.create(dadosAutor);
      res.status(201).json({message: "Autor cadastrado", data: autorCadastrado});
    } catch (error) {
      next(error);
    }
  }


  static async atualizaAutor(req, res, next){
    try {
      const idAutor = req.params.id;
      const dadosAutor = req.body;
      await autorModel.findByIdAndUpdate(idAutor, dadosAutor);
      const autorAtualizado = await autorModel.findById(idAutor);
      res.status(200).json({message: "Autor atualizado!", data: autorAtualizado});
    } catch (error) {
      next(error);
    }
  }


  static async deletaAutor(req, res, next){
    try {
      const idAutor = req.params.id;
      await autorModel.findByIdAndDelete(idAutor);
      res.status(200).json({message: "Autor deletado com sucesso!"});
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;