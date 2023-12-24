import { editoraModel } from "../models/editora.js";

class EditoraController{

  static async buscaEditoras(req, res, next){
    try {
      const resultadoEditoras = await editoraModel.find({});
      res.status(200).json(resultadoEditoras);
    } catch (error) {
      next(error);
    }
  }


  static async buscaEditora(req, res, next){
    try {
      const idEditora = req.params.id;
      const resultadoEditora = await editoraModel.findById(idEditora);

      if (resultadoEditora === null) {
        res.status(404).json({message: "ID não encontrado"});
        return;
      }

      res.status(200).json(resultadoEditora);
    } catch (error) {
      next(error);
    }
  }


  static async cadastraEditora(req, res, next){
    try {
      const dadosEditora = req.body;
      const editoraCadastrada = await editoraModel.create(dadosEditora);
      res.status(201).json({message: "Editora cadastrada!", data: editoraCadastrada});
    } catch (error) {
      next(error);
    }
  }


  static async atualizaEditora(req, res, next){
    try {
      const idEditora = req.params.id;
      const dadosEditora = req.body;
      await editoraModel.findByIdAndUpdate(idEditora, dadosEditora);
      const editoraAtualizada = await editoraModel.findById(idEditora);
      res.status(200).json({message: "Editora atualizada!", data: editoraAtualizada});
    } catch (error) {
      next(error);
    }
  }


  static async deletaEditora(req, res, next){
    try {
      const idEditora = req.params.id;
      await editoraModel.findByIdAndDelete(idEditora);
      res.status(200).json({message: "Editora excluída!"});
    } catch (error) {
      next(error);
    }
  }
}

export default EditoraController;