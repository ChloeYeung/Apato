/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("support_users").del();
  await knex("support_users").insert([
    {
      email: "sup1@sup1",
      password: "$2b$10$GFqNxSvVG0/hNikJHJxeIeRTvuOshArFoIpk/5a3.WqyXqdatWvR.",
      name: "Admin1",
    },
  ]);
  // pw = cus1
};
