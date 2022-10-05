/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('company_product').del()
  await knex('company_product').insert([
    {id: 1, company_id: 1, name: "Apple", description: "Sweet and Tasty", stock: "3", price: "0.012", tag: "fruit", type: "Product" },
    {id: 2, company_id: 1, name: "Strawberry", description: "Made in Japan", stock: "5", price: "0.015", tag: "fruit", type: "Product"},
    {id: 3, company_id: 1, name: "Picking Blackberry Event", description: "0.08ETH farm entrance fee to get in and pick any blackberry", stock: "999", price: "0.08", tag: "fruit", type: "Service"},
    {id: 4, company_id: 1, name: "Picking Pear Event", description: "0.08ETH farm entrance fee to get in and pick any pear", stock: "999", price: "0.08", tag: "fruit", type: "Service"},
    {id: 5, company_id: 2, name: "Marketing Consultation", description: "Identify effective marketing campaigns that will effectively and efficiently reach targeted audiences", stock: "2", price: "0.018", tag: "marketing", type: "Product"},
    {id: 6, company_id: 2, name: "Piano Tutorial", description: "0.026ETH per hour, suitable for grade 1 - grade 8 students", stock: "100", price: "0.026", tag: "music", type: "Service"},
    {id: 7, company_id: 2, name: "Ballet Tutorial", description: "0.026ETH per hour, 3000m Mong Kok studio", stock: "50", price: "0.026", tag: "dance", type: "Service"},
  ]);
};