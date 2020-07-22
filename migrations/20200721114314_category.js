
exports.up = function(knex) {
    let createQuery = `CREATE TABLE category(
        category_id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255),
        icon JSON
      )`
      return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE category`
    return knex.raw(dropQuery)
};
