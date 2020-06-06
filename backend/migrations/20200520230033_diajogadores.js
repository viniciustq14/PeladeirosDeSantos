
exports.up = function (knex) {
  return knex.schema.createTable('diaJogadores', table => {
    table.increments('id').notNullable();
    table.integer('id_diaJogo').notNullable();
    table.integer('id_jogador').notNullable();
    table.integer('qt_partidas').notNullable();
    table.timestamp('dt_escalado').defaultTo(knex.fn.now());
    table.foreign('id_diaJogo').references('id_diaJogo').inTable('dia_jogos');
    table.foreign('id_jogador').references('id_jogador').inTable('jogadores');
  })
};

exports.down = function (knex) {
  return knex.schema.droptable('diaJogadores');
};
