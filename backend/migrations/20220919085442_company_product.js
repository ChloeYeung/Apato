/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("company_product", (table) => {
        table.increments();
        table.string("company_id");
        table.string("name");
        table.string("description");
        table.integer("quantity");
        table.float("price");
        table.string("tag");
        table.enum("type",["Product", "Service"]) 
        table.string("image_name");
        table.binary("image_data");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("company_product");
};
