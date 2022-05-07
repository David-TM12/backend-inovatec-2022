const express = require("express");
const router = express.Router();
const coletorRouter = require("./coletor.routes");
const geradorRouter = require("./gerador.routes");

router.use("/coletores", coletorRouter);
router.use("/geradores", geradorRouter);

module.exports = router;