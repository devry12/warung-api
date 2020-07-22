
exports.up = function(knex) {
    let createQuery = `CREATE TABLE unit(
        unit_id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255)
      )`
      return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE unit`
    return knex.raw(dropQuery)
};
