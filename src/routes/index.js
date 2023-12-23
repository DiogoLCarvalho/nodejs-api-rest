import express from "express";
import routesQuadrinho from "./routesQuadrinho.js";
import routesAutor from "./routesAutor.js";
import routesEditora from "./routesEditora.js";

const routes = app => {
    app.use(express.json(), routesQuadrinho, routesAutor, routesEditora)
}

export default routes;