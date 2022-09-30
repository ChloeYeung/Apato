/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('purchase_history', function(table){
        table.increments();
        table.string("order_id")
        table.integer("customer_id")
        table.integer("product_id");
        table.integer("unit");
        table.integer("company_id");
        table.string("product_name");
        table.float("price");
        table.enum("type",["Product", "Service"]) 
        table.binary("image_data");
        table.string("date");
        table.string("time");
        table.enum("status",["Pending", "Comfirm", "Packing", "Shipping", "Finished"])
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("purchase_history");
};
