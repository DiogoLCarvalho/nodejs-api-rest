import mongoose from "mongoose";

// Middleware de erro
// next é quem encaminha o erro que chegou do controlador para esse middleware aq

// eslint-disable-next-line no-unused-vars
function manipulaErros(erro, req, res, next) {
  console.log(erro);
  
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Um ou mais dados fornecidos estão incorretos" });
  } else {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export default manipulaErros;