const connection = require('../database/connection');

module.exports = {
async create (request, response){
    const { email, senha } = request.body;   
    const usuario = await connection('usuario')
    .where('email', email).andWhere('senha', senha)
    .select('id','nome')
    .first();

    if (!usuario) {
        return response.status(400).json({ Error: 'Usuario ou senha invalido.' });
    }
    return response.json(usuario);
}
}