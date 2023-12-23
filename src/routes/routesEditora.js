import express from "express";
import EditoraController from "../controllers/EditoraController.js";

const routesEditora = express.Router();

routesEditora.get("/editora", EditoraController.buscaEditoras);
routesEditora.get("/editora/:id", EditoraController.buscaEditora);
routesEditora.post("/editora", EditoraController.cadastraEditora);
routesEditora.put("/editora/:id", EditoraController.atualizaEditora);
routesEditora.delete("/editora/:id", EditoraController.deletaEditora);

export default routesEditora;
