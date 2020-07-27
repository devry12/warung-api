const express = require('express');
const router = express.Router();


// const checkAuth = require('../middleware/check-auth.js')
const db = require('../config/db.js')

//get data category
router.get('/', async (req, res) => {
    var category = await db('category');
    res.status(200).json({
        status: true,
        message: 'success',
        data: category
    })
});
//get data percategory
router.get('/:category_id', async (req, res) => {
    var category = await db('category').where('category_id', req.params.category_id);
    res.status(200).json({
        status: true,
        message: 'success',
        data: category
    })
});
//add data category
router.post('/', async (req, res) => {
    var category = await db('category').insert({ name: req.body.name, icon: req.body.icon })
    if (category) {
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
//update data category
router.put('/', async (req, res) => {
    var category = await db('category').where('category_id', req.body.category_id).update({ name: req.body.name, icon: req.body.icon })
    if (category) {
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

//delete data category
router.delete('/', async (req, res) => {
    var checkProduct = await db('products').where('unit_id', req.body.unit_id)
    if (checkProduct.length < 1) {

        var category = await db('category').where('category_id', req.body.category_id).del();
        if (category) {
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
    } else {
        res.status(404).json({
            status: false,
            message: 'id not empty',
        })
    }

});

module.exports = router
