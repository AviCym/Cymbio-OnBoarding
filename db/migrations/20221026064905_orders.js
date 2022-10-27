
exports.up = function(knex) {
  return knex.schema
  .createTable('orders', (table)=>{
    table.increments().primary().unique();
    table.string('type').notNullable();
    table.integer('retailer_order_id').notNullable();
    table.integer('shipping_paid');
    table.string('shipping_method_code');
    table.integer('retailer_id');
    table.boolean('expired');
    table.timestamps(true, true);
  })
  .createTable('order_lines', (table)=>{
    table.increments();
    table.integer('order_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders');
    table.integer('quantity').notNullable();
    table.string('retailer_sku').notNullable();
    table.integer('billed_amount')
    table.integer('original_quantity').notNullable();
    table.integer('unit_price').notNullable();
    table.integer('tax_billed_amount')
    table.integer('variant_id').notNullable();
    table.timestamps(true, true );
  })
  .createTable('notes', (table)=>{
    table.increments();
    table.string('note_content');
    table
        .integer('order_line_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('order_lines');
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('notes')
  .dropTableIfExists('order_lines')
  .dropTableIfExists('orders');
};
