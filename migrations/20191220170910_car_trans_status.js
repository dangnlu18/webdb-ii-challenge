
exports.up = async function(knex) {
        await knex.schema.alterTable('cars', (table) =>{
          table.text('transmission')
          table.text('status')
    })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('cars', (table)=>{
      table.dropColumn('status')
      table.dropColumn('transmission')
  })
};
