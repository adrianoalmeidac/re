const connection = require('../database/connection');

module.exports = {

    async busca(request, response){
        const usuarioid = request.headers.usuario;

        const livros = await connection('livro').where('fkusuario', usuarioid).select('*');

        return response.json(livros);
    }
}