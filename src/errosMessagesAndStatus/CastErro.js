import ErroInterno from "./ErroInterno.js";

class CastErro extends ErroInterno{
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos"){
    super(mensagem, 400);
  }
}

export default CastErro;