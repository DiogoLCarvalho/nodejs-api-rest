import CastErro from "../errosMessagesAndStatus/CastErro.js";

// Listar todos os quadrinhos esta paginado, com o limite de 5 HQ por página, para mudar basta passar na query
// http://localhost:3000/quadrinho?pagina=1&limite=2
// http://localhost:3000/quadrinho?ordenacao=segmento:1
// http://localhost:3000/autor?pagina=2
async function paginacao(req, res, next) {
  try {
    let { limite = 5, pagina = 1, ordenacao = "nome:1" } = req.query;

    let [campoOrdenacao, ordem] = ordenacao.split(":");

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    // Do quadrinho controller
    const resultadoController = req.resultado;

    if (limite > 0 && pagina > 0) {
      const resultadoPaginado = await resultadoController.find()
        .sort({ [campoOrdenacao]: ordem })
        .skip((pagina - 1) * limite)
        .limit(limite);

      res.status(200).json(resultadoPaginado);
    } else {
      next(new CastErro());
    }

  } catch (error) {
    next(error);
  }
}

export default paginacao;