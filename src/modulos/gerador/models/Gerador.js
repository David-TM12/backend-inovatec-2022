const {DataTypes, Model} = require("sequelize");

class Gerador extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            estado: DataTypes.STRING,
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            complemento: DataTypes.STRING,
            telefone: DataTypes.STRING,
		    celular: DataTypes.STRING,
        },{
            sequelize,
            modelName: 'geradores'
        });
    }
}

module.exports = Gerador;