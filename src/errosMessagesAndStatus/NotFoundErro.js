import ErroInterno from "./ErroInterno.js";

class NotFoundErro extends ErroInterno{
  constructor(mensagem = "Rota não encontrada"){
    super(mensagem, 404);
  }
}

export default NotFoundErro;