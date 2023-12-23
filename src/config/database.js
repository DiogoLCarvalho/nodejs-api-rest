import mongoose from "mongoose";

async function conectarComBanco() {
    
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default conectarComBanco;