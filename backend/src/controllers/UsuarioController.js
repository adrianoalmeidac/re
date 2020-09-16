const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create (request, response){
        const { nome, email, senha, whatsapp, cidade, uf } = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

    await  connection('usuario').insert({
        id,
        nome,
        email,
        senha,
        whatsapp,
        cidade,
        uf,
    })

    return response.json({ id });
    },

    async listar(request, response) {
        const usuarios = await connection('usuario').select('*');
    
        return response.json(usuarios);
    }
}