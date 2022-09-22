/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('company_product').del()
  await knex('company_product').insert([
    {id: 1, company_id: 1, name: "Apple", description: "Sweet and Tasty", stock: "3", price: "5.5", tag: "fruit", type: "Product" },
    {id: 2, company_id: 1, name: "Strawberry", description: "Made in Japan", stock: "5", price: "25", tag: "fruit", type: "Product"},
    {id: 3, company_id: 2, name: "Coffee", description: "Dark", stock: "2", price: "10", tag: "Drink", type: "Product"},
    {id: 4, company_id: 2, name: "Music", description: "Guitar", stock: "100", price: "350", tag: "music", type: "Service"},
    {id: 5, company_id: 2, name: "Dance", description: "Dance", stock: "50", price: "350", tag: "dance", type: "Service"},
  ]);
};