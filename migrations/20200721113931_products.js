
exports.up = function(knex) {
    let createQuery = `CREATE TABLE products(
        product_id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255),
        unit_id int,
        quantity int,
        price int,
        category_id int,
        image VARCHAR(255),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (category_id) REFERENCES category(category_id),
        FOREIGN KEY (unit_id) REFERENCES unit(unit_id)
      )`
      return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE products`
    return knex.raw(dropQuery)
};
