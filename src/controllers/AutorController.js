import NotFoundErro from "../errosMessagesAndStatus/NotFoundErro.js";
import { autorModel } from "../models/index.js";

class AutorController {


  static async buscaAutores(req, res, next) {
    try {
      const resultadoAutores = autorModel.find();
      
      // Paginação
      req.resultado = resultadoAutores;

      next();
    } catch (error) {
      next(error);
    }
  }


  static async buscaAutor(req, res, next) {
    try {
      const idAutor = req.params.id;
      const resultadoAutor = await autorModel.findById(idAutor);

      if (resultadoAutor !== null) {
        res.status(200).json(resultadoAutor);
      } else {
        next(new NotFoundErro("ID do autor não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }


  static async cadastroAutor(req, res, next) {
    try {
      const dadosAutor = req.body;
      const autorCadastrado = await autorModel.create(dadosAutor);
      res.status(201).json({ message: "Autor cadastrado", data: autorCadastrado });
    } catch (error) {
      next(error);
    }
  }


  static async atualizaAutor(req, res, next) {
    try {
      const idAutor = req.params.id;
      const dadosAutor = req.body;
      const respostaAutor = await autorModel.findByIdAndUpdate(idAutor, dadosAutor);

      if (respostaAutor !== null) {
        const autorAtualizado = await autorModel.findById(idAutor);
        res.status(200).json({ message: "Autor atualizado!", data: autorAtualizado });
      } else {
        next(new NotFoundErro("ID do autor não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }


  static async deletaAutor(req, res, next) {
    try {
      const idAutor = req.params.id;
      const respostaAutor = await autorModel.findByIdAndDelete(idAutor);

      if (respostaAutor !== null) {
        res.status(200).json({ message: "Autor deletado com sucesso!" });

      } else {
        next(new NotFoundErro("ID do autor não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;