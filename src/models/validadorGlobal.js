import mongoose from "mongoose";

// Defini a regra para todos os atributos do tipo string definidos no modelo
mongoose.Schema.Types.String.set("validate", {
  validator: value => value.trim() !== "",
  message: ({path}) => `O campo '${path}' esta em branco! Por favor preencha-o!`
});