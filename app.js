import "dotenv/config";
import express from "express";
import conectarComBanco from "./src/config/database.js";
import routes from "./src/routes/index.js";
import manipulaErros from "./src/middleware/manipulaErros.js";
import manipula404 from "./src/middleware/manipula404.js";

const conexao = await conectarComBanco();

conexao.on("error", function(erro) {
  console.error(`Falha ao conectar com Banco de dados ${erro}`);
});

conexao.once("open", () => {
  console.log("Sucesso na conexão com Banco de dados!");
});

const APP = express();

routes(APP);

const PORT = 3000;

APP.use(manipula404);

APP.use(manipulaErros);

APP.listen(PORT, () => console.log("Servidor online em http://localhost:3000/"));