import { editoraModel } from "../models/editora.js";

class EditoraController{

  static async buscaEditoras(req, res){
    try {
      const resultadoEditoras = await editoraModel.find({});
      res.status(200).json(resultadoEditoras);
    } catch (error) {
      res.status(500).json({message: `Falha na requisição ${error.message}`});
    }
  }


  static async buscaEditora(req, res){
    try {
      const idEditora = req.params.id;
      const resultadoEditora = await editoraModel.findById(idEditora);
      res.status(200).json(resultadoEditora);
    } catch (error) {
      res.status(500).json({message: `Falha na requisição ${error.message}`});
    }
  }


  static async cadastraEditora(req, res){
    try {
      const dadosEditora = req.body;
      const editoraCadastrada = await editoraModel.create(dadosEditora);
      res.status(201).json({message: "Editora cadastrada!", data: editoraCadastrada});
    } catch (error) {
      res.status(500).json({message: `Falha na requisição ${error.message}`});
    }
  }


  static async atualizaEditora(req, res){
    try {
      const idEditora = req.params.id;
      const dadosEditora = req.body;
      await editoraModel.findByIdAndUpdate(idEditora, dadosEditora);
      const editoraAtualizada = await editoraModel.findById(idEditora);
      res.status(200).json({message: "Editora atualizada!", data: editoraAtualizada});
    } catch (error) {
      res.status(500).json({message: `Falha na requisição ${error.message}`});
    }
  }


  static async deletaEditora(req, res){
    try {
      const idEditora = req.params.id;
      await editoraModel.findByIdAndDelete(idEditora);
      res.status(200).json({message: "Editora excluída!"});
    } catch (error) {
      res.status(500).json({message: `Falha na requisição ${error.message}`});
    }
  }
}

export default EditoraController;