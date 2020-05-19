
exports.up = function(knex) {
  return knex.schema.createTable('dia_jogos',table=>{
      table.increments('id_jogo').primary().notNullable();
      table.timestamp('dt_jogo').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dia_jogos');
};
