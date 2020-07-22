const express = require('express');
const app = express();
const authRoutes = require('./api/routes/auth')
const productRoutes = require('./api/routes/product')
const categoryRoutes = require('./api/routes/category')
const unitRoutes = require('./api/routes/unit')
const likeRoutes = require('./api/routes/product_like')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);
app.use('/unit', unitRoutes);
app.use('/like', likeRoutes);

module.exports = app;

