/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('company_users').del()
  await knex('company_users').insert([
    { id: 1, email: 'com1@com1', password: "$2b$10$pxSc39GHKm7dDB3QEPyKl.iWm3iSyMd3pVv5wGzbELeeOoBzs4NfO", name: "Piece Of Fruit Limited", phone_no: "87654321", cypto_no: "54321" },
    //password: com1
    { id: 2, email: 'com2@com2', password: "$2b$10$3YhSHgVpz3qDXoGy1VIiXO3MK1JbnOyEgjsc73DAMViTpm2KDRGcS", name: "Doctor Interesting Limited", phone_no: "66666666", cypto_no: "66666666" },
    //password: com2
  ]);
};




