import express from "express";
import AutorController from "../controllers/AutorController.js";
import paginacao from "../middleware/paginacao.js";

const routesAutor = express.Router();

routesAutor.get("/autor", AutorController.buscaAutores, paginacao);
routesAutor.get("/autor/:id", AutorController.buscaAutor);
routesAutor.post("/autor", AutorController.cadastroAutor);
routesAutor.put("/autor/:id", AutorController.atualizaAutor);
routesAutor.delete("/autor/:id", AutorController.deletaAutor);

export default routesAutor;
