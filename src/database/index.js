const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
//const Coletor = require("../modulos/coletor/models/Coletor");
const Gerador = require("../modulos/gerador/models/Gerador");

const connection = new Sequelize(dbConfig);

Gerador.init(connection);

module.exports = connection;