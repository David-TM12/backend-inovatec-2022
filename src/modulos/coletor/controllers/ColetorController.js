const Coletor = require("../models/Coletor");

module.exports = {

    async list (req, res){
        const coletores = await Coletor.findAll();
        
        return res.json(coletores);
    },

    async register(req, res){
        const { nome, email, senha } = req.body;
        const coletor = await Coletor.create({
            nome, email, senha
        });

        return res.json(coletor);
    }
}