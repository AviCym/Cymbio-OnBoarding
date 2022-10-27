import { Knex } from "knex";

export const seed =  async function(knex:Knex) {
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');
  await knex.raw('TRUNCATE TABLE orders');
  await knex.raw('TRUNCATE TABLE order_lines');
  await knex.raw('TRUNCATE TABLE notes');
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');

 await knex('orders').insert([
   {
    id: 1,
    type: 'ECOMMERCE',
    retailer_order_id: '123',
    shipping_paid: 10,
    shipping_method_code: 'FEDEX',
    retailer_id: 123,
    expired: false,
   }
  ]) 
 await knex('order_lines').insert([
  {
    order_id: 1,
    quantity: 100,
    retailer_sku: 'SKU123',
    billed_amount: 299,
    original_quantity: 10,
    unit_price: 299,
    tax_billed_amount: 10,
    variant_id: 123,
   }
  ])
};


