/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('purchase_history', function(table){
        table.increments();
        table.integer("customer_id")
        table.integer("product_id");
        table.integer("unit");
        table.integer("company_id");
        table.string("product_name");
        table.string("description");
        table.float("price");
        table.string("tag");
        table.string("stock")
        table.enum("type",["Product", "Service"]) 
        table.string("image_name");
        table.binary("image_data");
        table.date("date");
        table.enum("status",[])
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("purchase_history");
};
