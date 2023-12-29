import NotFoundErro from "../errosMessagesAndStatus/NotFoundErro.js";
import { autorModel } from "../models/index.js";
import { editoraModel } from "../models/index.js";
import {quadrinhoModel} from "../models/index.js";

class QuadrinhoController{

  // Armazena o resultado da busca na requisição que vai ser acessado pelo middleware de paginacao, eles são ligados pela rota
  static async buscaQuadrinhos(req, res, next){
    try {
      const buscaLivro = quadrinhoModel.find();

      req.resultado = buscaLivro;

      next();
    } catch (error) {
      next(error);
    }
  }


  static async buscaQuadrinho(req, res, next){
    try {
      const idQuadrinho = req.params.id;
      const retornoQuadrinho = await quadrinhoModel.findById(idQuadrinho);

      if (retornoQuadrinho !== null) {
        res.status(200).json(retornoQuadrinho);
      }else{
        next(new NotFoundErro("ID do quadrinho não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }
  
  // http://localhost:3000/quadrinho/busca?nome=Homem-Animal
  // http://localhost:3000/quadrinho/busca?genero=Ação&nome=The Walking Dead: Volume 2
  // busca pelo: nome, gênero, preço e editora
  static async buscaQuadrinhoPelaURL(req, res,next){
    try {
      const {genero, nome, minPreco, maxPreco, nomeEditora} = req.query;

      let busca = {};

      if (genero) busca.genero = genero;
      if (nome) busca.nome = { $regex: nome, $options: "i"}; // busca por regex para achar um texto dentro do nome da HQ
      if (minPreco) busca.preco = {$gte: minPreco};
      if (maxPreco) busca.preco = {$lte: maxPreco};
      if (maxPreco && minPreco) busca.preco = {$gte: minPreco, $lte: maxPreco};

      if (nomeEditora){
        const editora = await editoraModel.findOne({nome: nomeEditora});

        if (editora !== null){
          const editoraID = editora._id;

          busca["editora._id"] = editoraID;
        }else{
          busca = null;
        }
        
      }

      if (busca !== null){
        const quadrinhoResultado = quadrinhoModel.find(busca);

        req.resultado = quadrinhoResultado;

        next();
      }else{
        res.status(200).json([]);
      }
      
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
      const resultadoQuadrinho = await quadrinhoModel.findByIdAndUpdate(idQuadrinho, dadosQuadrinho);

      if (resultadoQuadrinho !== null) {
        const quadrinhoAtualizado = await quadrinhoModel.findById(idQuadrinho);
        res.status(200).json({message: "Quadrinho atualizado!", data: quadrinhoAtualizado});
      }else{
        next(new NotFoundErro("ID do quadrinho não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }


  static async deletaQuadrinho(req, res, next){
    try {
      const idQuadrinho = req.params.id;
      const resultadoQuadrinho = await quadrinhoModel.findByIdAndDelete(idQuadrinho);

      if (resultadoQuadrinho !== null) {
        res.status(200).json({message: "Quadrinho deletado!"});
      }else{
        next(new NotFoundErro("ID do quadrinho não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }

}

export default QuadrinhoController;