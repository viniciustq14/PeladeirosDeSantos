
exports.up = function(knex) {
  return knex.schema.createTable('dia_jogos',table=>{
      table.increments('id_jogo').primary().notNullable();
      table.date('dt_jogo').unique();
      table.boolean('ic_ativo');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dia_jogos');
};
