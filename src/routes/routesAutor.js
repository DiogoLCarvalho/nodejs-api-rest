import express from "express";
import AutorController from "../controllers/AutorController.js";

const routesAutor = express.Router();

routesAutor.get("/autor", AutorController.buscaAutores);
routesAutor.get("/autor/:id", AutorController.buscaAutor);
routesAutor.post("/autor", AutorController.cadastroAutor);
routesAutor.put("/autor/:id", AutorController.atualizaAutor);
routesAutor.delete("/autor/:id", AutorController.deletaAutor);

export default routesAutor;
