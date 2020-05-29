
exports.up = function(knex) {
  return knex.schema.createTable('diaJogadores',table=>{
      table.integer('id_diaJogo').primary();
      table.integer('id_jogador').primary();
      table.integer('qt_partidas').notNullable();
      table.timestamp('dt_escalado').defaultTo(knex.fn.now());
      table.foreign('id_diaJogo').references('id_jogo').inTable('dia_jogos');
      table.foreign('id_jogador').references('id_jogador').inTable('jogadores');
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('diaJogadores');
};
