/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customer_users').del()
  await knex('customer_users').insert([
    { email: 'cus1@cus1', password: "$2b$10$UayEgUY5yZjDgBffaVNCaO.o/Ky.oGzD9Naab.UByedFqMgJ6h7GC", name: "Snow White", phone_no: "12345678", address: "castle area 1", cypto_no: "12345" },
    { email: 'cus2@cus2', password: "$2b$10$OCHrwQn8Mg1L5CnVP4fyUuyShcXtL62PabL5dWBXGMVS5oIh4PSci", name: "Joker", phone_no: "12345678", address: "Gotham City", cypto_no: "12345" },
    //password: cus1
    //password: cus2
  ]);

};