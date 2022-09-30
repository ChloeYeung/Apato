/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('purchase_history').del()
  await knex('purchase_history').insert([
    {order_id:"1-1-20220930-123001",customer_id: 1, product_id: 1, unit: 2, company_id: 1, product_name: "Apple", price: 0.012, type: "Product", date: "2022/09/30", time: "12:30:01" ,status:"Pending" },
  ]);
};

//order: customer_id - company_id - date - time