/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('customer_cart', function(table){
    table.increments();
    table.integer("customer_id")
    table.integer("product_id");
    table.integer("unit");
    table.string("company_id");
    table.string("name");
    table.string("description");
    table.float("price");
    table.string("tag");
    table.string("stock")
    table.enum("type",["Product", "Service"]) 
    table.string("image_name");
    table.binary("image_data");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("customer_cart");

};
