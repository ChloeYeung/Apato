/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('purchase_history').del()
  await knex('purchase_history').insert([
    {order_id:"1-1-20220930-123001",customer_id: 1, product_id: 1, unit: 2, company_id: 1, product_name: "Apple", price: 0.012, type: "Product", date: "2022/09/30", time: "12:30:01" ,status:"Pending" },
    {order_id:"1-2-20220930-123001",customer_id: 1, product_id: 2, unit: 1, company_id: 1, product_name: "Strawberry", price: 0.015, type: "Product", date: "2022/09/30", time: "12:30:01" ,status:"Pending" },
    {order_id:"1-3-20220930-123001",customer_id: 1, product_id: 3, unit: 1, company_id: 1, product_name: "Picking Blackberry Event", price: 0.08, type: "Service", date: "2022/09/30", time: "12:30:01" ,status:"Pending" },
    {order_id:"1-4-20220930-123001",customer_id: 1, product_id: 4, unit: 1, company_id: 1, product_name: "Picking Pear Event", price: 0.08, type: "Service", date: "2022/09/30", time: "12:30:01" ,status:"Pending" },
    {order_id:"2-2-20220930-173001",customer_id: 2, product_id: 2, unit: 2, company_id: 1, product_name: "Strawberry", price: 0.015, type: "Product", date: "2022/09/29", time: "17:30:01" ,status:"Pending" },
    {order_id:"2-4-20220930-173001",customer_id: 2, product_id: 4, unit: 1, company_id: 1, product_name: "Picking Pear Event", price: 0.08, type: "Service", date: "2022/09/29", time: "17:30:01" ,status:"Pending" },
    {order_id:"2-5-20221001-192020",customer_id: 2, product_id: 1, unit: 1, company_id: 1, product_name: "Apple", price: 0.012, type: "Product", date: "2022/10/01", time: "19:20:20" ,status:"Pending" },
  ]);
};

//order: customer_id - company_id - date - time