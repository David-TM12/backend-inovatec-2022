const { Router } = require("express");
const ColetorController = require("../modulos/coletor/controllers/ColetorController");
const routes = Router();

routes.post("/registro", ColetorController.register);
routes.get("/lista", ColetorController.list);

module.exports = routes;