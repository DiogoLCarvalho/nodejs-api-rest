import express from "express";

const APP = express();

const PORT = 3000;

APP.listen(PORT, _ => console.log("Servidor online em http://localhost:3000/"));