/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('company_product').del()
  await knex('company_product').insert([
    {id: 1, company_id: 1, name: "Apple", description: "Sweet and Tasty", quantity: "3", price: "5.5", tag: "fruit", type: "Product" },
    {id: 2, company_id: 1, name: "Strawberry", description: "Made in Japan", quantity: "5", price: "25", tag: "fruit", type: "Product"},
  ]);
};