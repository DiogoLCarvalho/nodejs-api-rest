import express from "express";
import QuadrinhoController from "../controllers/QuadrinhoController.js";

const routesQuadrinho = express.Router();

routesQuadrinho.get("/quadrinho", QuadrinhoController.buscaQuadrinhos);
routesQuadrinho.get("/quadrinho/busca", QuadrinhoController.buscaQuadrinhoPelaURL);
routesQuadrinho.get("/quadrinho/:id", QuadrinhoController.buscaQuadrinho);
routesQuadrinho.post("/quadrinho", QuadrinhoController.cadastraQuadrinho);
routesQuadrinho.put("/quadrinho/:id", QuadrinhoController.atualizaQuadrinho);
routesQuadrinho.delete("/quadrinho/:id", QuadrinhoController.deletaQuadrinho);

export default routesQuadrinho;
