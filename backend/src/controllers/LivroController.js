const connection = require ('../database/connection');
const { listar } = require('./UsuarioController');

module.exports = {
    async create(request, response){
        const { nome, autor, descricao, livrosatrocar } = request.body;
        const fkusuario = request.headers.usuario;

        const [resultado] = await connection('livro').insert({
            nome,
            autor,
            descricao,
            livrosatrocar,
            fkusuario,
        });

        return response.json({ resultado });
    },

    async listar(request, response) {
        const { page  = 1 } = request.query;
        const idusuario = request.headers.usuario;
        const [quantidade] = await connection('livro')
        .where('fkusuario', idusuario)
        .count();

        const livros = await connection('livro')
        .join('usuario', 'usuario.id','=','livro.fkusuario' )
        .where('fkusuario', idusuario)
        .limit(5)
        .offset((page - 1 ) * 5)
        .select('livro.*',
        'usuario.nome as re',
        'usuario.email',
        'usuario.whatsapp',
        'usuario.uf',
        'usuario.cidade'
        );

        response.header('X-Total-Count', quantidade['count(*)']);
        return response.json(livros);
    },

    async excluir(request, response){
        const { id } = request.params;
        const idusuario = request.headers.usuario;

        const livro = await connection('livro')
            .where('id', id)
            .select('fkusuario')
            .first();
        
        if (livro.fkusuario !== idusuario){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }
        await connection('livro').where('id', id).delete();

        return response.status(204).send();
    }
}