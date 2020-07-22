
const express = require('express');
const router = express.Router();


// const checkAuth = require('../middleware/check-auth.js')
const db = require('../config/db.js')

//get data unit
router.get('/:product_id/:user_id', async (req, res) => {
    var unit = await db('product_like').where({
        product_id: req.params.product_id,
        user_id: req.params.user_id
    });
    res.status(200).json({
        status: true,
        message: 'success',
        data: unit
    })
});

//add data unit
router.post('/', async (req, res) => {
    var like = await db('product_like').insert({ product_id: req.body.product_id, user_id: req.body.user_id })
    if (like) {
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

//delete data unit
router.delete('/', async (req, res) => {
    var like = await db('product_like').where({ product_id: req.body.product_id, user_id: req.body.user_id }).del();
    if (like) {
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


});

module.exports = router
