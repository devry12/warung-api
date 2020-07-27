const express = require('express');
const router = express.Router();
// const checkAuth = require('../middleware/check-auth.js')
const db = require('../config/db.js')

router.get('/:category_id', async (req, res, next) => {
    var product = await db.select('p.*', 'u.name as unit', 'c.name as category').from({ p: 'products' }).where('p.category_id', req.params.category_id).leftJoin({ u: 'unit' }, 'p.unit_id', 'u.unit_id').leftJoin({ c: 'category' }, 'p.category_id', 'c.category_id').orderBy('p.name')
    console.log(product.length);

    res.json({
        status: true,
        message: 'success',
        data: product
    })
})


router.get('/detail/:product_id', async (req, res, next) => {
    var product = await db('products').where('product_id', req.params.product_id)
    res.json({
        status: true,
        message: 'success',
        data: product
    })
})



router.post('/', async (req, res, next) => {
    var product = await db('products').insert({
        name: req.body.name,
        unit_id: req.body.unit_id,
        quantity: req.body.quantity,
        price: req.body.price,
        category_id: req.body.category_id,
        image: req.body.image
    })
    res.json({
        status: true,
        message: 'success',
        data: product
    })
});

//update data product
router.put('/', async (req, res, next) => {
    var product = await db('products').where('product_id', req.body.product_id).update({
        name: req.body.name,
        name: req.body.name,
        unit_id: req.body.unit_id,
        quantity: req.body.quantity,
        price: req.body.price,
        category_id: req.body.category_id,
        image: ""
    })
    if (product) {
        res.status(200).json({
            status: true,
            message: 'success',
        })
    } else {
        res.status(404).json({
            status: false,
            message: 'fail',
        })
    }
})

router.delete('/', async (req, res, next) => {
    var product = await db('products').where('product_id', req.body.product_id).del()
    if (product) {
        res.status(200).json({
            status: true,
            message: 'success',
        })
    } else {
        res.status(404).json({
            status: false,
            message: 'fail',
        })
    }
})
module.exports = router
