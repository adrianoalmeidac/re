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

    return response.json({ id,nome });
    },

    async listar(request, response) {
        const idusuario = request.headers.usuario;
        const usuarios = await connection('usuario')
        .where('id', idusuario)
        .select('*');
    
        return response.json(usuarios);
    },

    async alterar(request, response) {
        const idusuario = request.headers.usuario;
        
        const { nome, email, senha, whatsapp, cidade, uf} = request.body;

        // console.log(idusuario);
        const existe = await connection('usuario')
            .where('id', idusuario)
            .select('id')
            .first();
   
        if (idusuario == null){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }
        else if (existe.id == null){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }
        else {
            
            await connection('usuario')
            .where('id', idusuario)
            .update({
                'nome':nome,
                'email':email,
                'senha':senha,
                'whatsapp':whatsapp,
                'cidade':cidade,
                'uf':uf
            })
            return response.status(200).send();
        }
        
    }
}