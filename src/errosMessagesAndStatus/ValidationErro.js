import CastErro from "./CastErro.js";

class ValidationErro extends CastErro{
  constructor(erro){
    const mensagemErro = Object.values(erro.errors).map(e => e.message).join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
  }
}

export default ValidationErro;