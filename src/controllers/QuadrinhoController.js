import { autorModel } from "../models/autor.js";
import { editoraModel } from "../models/editora.js";
import quadrinhoModel from "../models/quadrinho.js";

class QuadrinhoController{

    static async buscaQuadrinhos(req, res){
        try {
            const listaQuadrinhos = await quadrinhoModel.find({});
            res.status(200).json(listaQuadrinhos);
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }


    static async buscaQuadrinho(req, res){
        try {
            const idQuadrinho = req.params.id;
            const retornoQuadrinho = await quadrinhoModel.findById(idQuadrinho);
            res.status(200).json(retornoQuadrinho);
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }


    static async cadastraQuadrinho(req, res){
        const dadosQuadrinho = req.body;

        try {
            const resultadoAutor = await autorModel.findById(dadosQuadrinho.autor);
            const resultadoEditora = await editoraModel.findById(dadosQuadrinho.editora);
            const novoQuadrinho = {...dadosQuadrinho, autor: {...resultadoAutor._doc}, editora: {...resultadoEditora._doc}}
            const quadrinhoCadastrado = await quadrinhoModel.create(novoQuadrinho);
            res.status(201).json({message: "Quadrinho cadastrado com sucesso!", data: quadrinhoCadastrado});
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});            
        }
    }


    static async atualizaQuadrinho(req, res){
        try {
            const idQuadrinho = req.params.id;
            const dadosQuadrinho = req.body;
            await quadrinhoModel.findByIdAndUpdate(idQuadrinho, dadosQuadrinho);
            const quadrinhoAtualizado = await quadrinhoModel.findById(idQuadrinho);
            res.status(200).json({message: "Quadrinho atualizado!", data: quadrinhoAtualizado});
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }


    static async deletaQuadrinho(req, res){
        try {
            const idQuadrinho = req.params.id;
            await quadrinhoModel.findByIdAndDelete(idQuadrinho);
            res.status(200).json({message: "Quadrinho deletado!"});
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }
}

export default QuadrinhoController;