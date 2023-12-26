import mongoose from "mongoose";

// Nos campos obrigatórios você pode passar uma mensagem de erro. Basta enviar um array pro objeto.
// Enum - restringe a string para valores especificos 
const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: mongoose.Schema.Types.String, required: [true, "O nome do autor é obrigatório"] },
  nacionalidade:{ 
    type: mongoose.Schema.Types.String, 
    enum: { 
      values: ["Brasil", "Estados Unidos da América", "Reino Unido", "Japão"],
      message: "{VALUE} não é um país permitido!"
    }
  },
}, { versionKey: false });

const autorModel = mongoose.model("autor", autorSchema);

export { autorModel, autorSchema };