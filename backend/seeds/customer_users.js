/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customer_users').del()
  await knex('customer_users').insert([
    { id: 1, email: 'cus1@cus1', password: "$2b$10$UayEgUY5yZjDgBffaVNCaO.o/Ky.oGzD9Naab.UByedFqMgJ6h7GC", name: "Kiko", phone_no: "12345678", address: "MK", cypto_no: "12345", image: "" },
    //password: cus1
  ]);

};