const express = require('express');

const UsuarioController = require ('./controllers/UsuarioController');
const LivroController = require ('./controllers/LivroController');
const BuscaController = require ('./controllers/BuscaControler');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/usuario', UsuarioController.listar);
routes.post('/usuario', UsuarioController.create);
routes.put('/usuario', UsuarioController.alterar);

routes.get('/livro', LivroController.buscarlivro);
routes.get('/livro/meuslivros', LivroController.listar);
routes.post('/livro', LivroController.create);
routes.delete('/livro/:id', LivroController.excluir);


routes.get('/busca', BuscaController.busca);



module.exports = routes;