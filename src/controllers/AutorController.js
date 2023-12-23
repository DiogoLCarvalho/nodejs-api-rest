import { autorModel } from "../models/autor.js";

class AutorController {


    static async buscaAutores(req, res){
        try {
            const resultadoAutores = await autorModel.find({});
            res.status(200).json(resultadoAutores);
        } catch (error) {
            res.status(500).json({message: `Falha na requsição ${error.message}`});
        }
    }


    static async buscaAutor(req, res){
        try {
            const idAutor = req.params.id;
            const resultadoAutor = await autorModel.findById(idAutor);
            res.status(200).json(resultadoAutor);
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }


    static async cadastroAutor(req, res){
        try {
            const dadosAutor = req.body;
            const autorCadastrado = await autorModel.create(dadosAutor);
            res.status(201).json({message: "Autor cadastrado", data: autorCadastrado});
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }


    static async atualizaAutor(req, res){
        try {
            const idAutor = req.params.id;
            const dadosAutor = req.body;
            await autorModel.findByIdAndUpdate(idAutor, dadosAutor);
            const autorAtualizado = await autorModel.findById(idAutor);
            res.status(200).json({message: "Autor atualizado!", data: autorAtualizado});
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});
        }
    }


    static async deletaAutor(req, res){
        try {
            const idAutor = req.params.id;
            await autorModel.findByIdAndDelete(idAutor);
            res.status(200).json({message: "Autor deletado com sucesso!"});
        } catch (error) {
            res.status(500).json({message: `Falha na requisição ${error.message}`});            
        }
    }
}

export default AutorController;