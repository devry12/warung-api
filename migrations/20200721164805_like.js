
exports.up = function (knex) {
    let createQuery = `CREATE TABLE product_like(
        like_id SERIAL PRIMARY KEY NOT NULL,
        product_id int,
        user_id int
      )`
    return knex.raw(createQuery)
};

exports.down = function (knex) {
    let dropQuery = `DROP TABLE product_like`
    return knex.raw(dropQuery)
};
