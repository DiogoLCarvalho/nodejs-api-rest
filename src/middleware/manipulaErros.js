import mongoose from "mongoose";
import ErroInterno from "../errosMessagesAndStatus/ErroInterno.js";
import CastErro from "../errosMessagesAndStatus/CastErro.js";
import ValidationErro from "../errosMessagesAndStatus/ValidationErro.js";
import NotFoundErro from "../errosMessagesAndStatus/NotFoundErro.js";

// Middleware de erro
// next é quem encaminha o erro que chegou do controlador para esse middleware aq

// eslint-disable-next-line no-unused-vars
function manipulaErros(erro, req, res, next) {
  console.log(erro);
  
  if (erro instanceof mongoose.Error.CastError) {
    new CastErro().enviarResposta(res);

  }else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationErro(erro).enviarResposta(res);

  } else if (erro instanceof NotFoundErro) {
    erro.enviarResposta(res);
  }else {
    new ErroInterno().enviarResposta(res);
  }
}

export default manipulaErros;