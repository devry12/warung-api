
exports.up = function(knex) {
    let createQuery = `CREATE TABLE users(
        id SERIAL PRIMARY KEY NOT NULL,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(255),
        password VARCHAR(255),
        phone_number VARCHAR(50),
        status ENUM ('admin','member') DEFAULT 'member',
        created_at TIMESTAMP
      )`
      return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE users`
    return knex.raw(dropQuery)
};
