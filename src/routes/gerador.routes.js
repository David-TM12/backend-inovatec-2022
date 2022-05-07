const { Router } = require("express");
const GeradorController = require("../modulos/gerador/controllers/GeradorController");
const routes = Router();

routes.post("/registro", GeradorController.register);
routes.get("/lista", GeradorController.list);

module.exports = routes;