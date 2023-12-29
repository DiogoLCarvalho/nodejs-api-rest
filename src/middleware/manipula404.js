import NotFoundErro from "../errosMessagesAndStatus/NotFoundErro.js";

function manipula404(req, res, next) {
  const erro = new NotFoundErro();
    
  next(erro);
}

export default manipula404;