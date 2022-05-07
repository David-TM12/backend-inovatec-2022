const Gerador = require("../models/Gerador");
const bcrypt = require("bcrypt");

module.exports = {

    async list (req, res){

        const geradores = await Gerador.findAll();
        
        return res.json(geradores);
    },

    async register(req, res){
        const { nome, email, senha } = req.body;

        const geradorExists = await Gerador.findOne({ where: { email } });

        console.log(geradorExists);

        if (geradorExists){
            return res.json({message: "Já existe um usuário cadastrado com esse email!"});
        }

        let senhaHash = '';
        bcrypt.hash(senha, 10)
        .then(resp =>{
            console.log('resss',resp);
            senhaHash = resp;
        })
        
       const gerador = await Gerador.create({
            email,
            senha: senhaHash,
            nome
        });
/*
       const gerador = await Gerador.create({
            nome, email, senha
        });
*/
        return res.json(gerador);
    }
}