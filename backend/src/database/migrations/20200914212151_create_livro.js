exports.up = function(knex) {
  return knex.schema.createTable('livro', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('autor').notNullable();
        table.string('descricao').notNullable();
        table.string('livrosatrocar').notNullable();

        table.string('fkusuario').notNullable();
        table.foreign('fkusuario').references('id').inTable('usuario');
  })
};

exports.down = function(knex) {
    knex.schema.dropTable('livro');
};