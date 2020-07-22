const express = require('express');
const router = express.Router();


// const checkAuth = require('../middleware/check-auth.js')
const db = require('../config/db.js')

//get data unit
router.get('/', async (req, res, next) => {
    var unit = await db('unit');
    res.status(200).json({
        status: true,
        message: 'success',
        data: unit
    })
});
//get data perunit
router.get('/:unit_id', async (req, res, next) => {
    var unit = await db('unit').where('unit_id', req.params.unit_id);
    res.status(200).json({
        status: true,
        message: 'success',
        data: unit
    })
});
//add data unit
router.post('/', async (req, res, next) => {
    var unit = await db('unit').insert({ name: req.body.name })
    if (unit) {
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
//update data unit
router.put('/', async (req, res, next) => {
    var unit = await db('unit').where('unit_id', req.body.unit_id).update({ name: req.body.name })
    if (unit) {
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
router.delete('/', async (req, res, next) => {
    var checkProduct = await db('products').where('unit_id', req.body.unit_id)
    
    if (checkProduct.length < 1) {

        var unit = await db('unit').where('unit_id', req.body.unit_id).del();
        if (unit) {
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
    }else{
        res.status(404).json({
            status: false,
            message: 'id not empty',
        })
    }

});

module.exports = router
