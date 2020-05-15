
exports.up = function (knex) {
  return knex.schema.createTable('jogadores', table => {
    table.increments('id_jogador').primary().notNullable();
    table.string('nm_jogador').notNullable();
    //um dos fatores e a frequencia do mes anterior e o atual
    table.integer('domingos_mes_passado').notNullable();
    table.integer('domingos_este_mes').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('jogadores');
};
