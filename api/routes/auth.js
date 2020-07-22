const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const hash = require('password-hash')

const checkAuth = require('../middleware/check-auth.js')
const db = require('../config/db.js')

router.post('/register', async (req, res, next) => {
    // console.log(req.body);
    var query = await db('users').where({ email: req.body.email })
    if (query.length > 0) {
        res.status(403).json({ status: false, error: 'Email sudah ada' })
    } else {
        if (req.body.password === req.body.confirmpassword) {
            var query = await db('users').insert({ email: req.body.email, password: hash.generate(req.body.password) })
            if (query) {
                res.status(200).json({ status: true, message: 'success' })
            } else {
                res.status(403).json({ status: false, error: 'ada masalah dengan query' })
            }
        } else {
            res.status(403).json({ status: false, error: 'password tidak sama' })
        }
    }
})

router.post('/login', async (req, res, next) => {
    var query = await db('users').where({ email: req.body.email, password: hash.verify(req.body.password) })
    if (query.length < 1) {
        error.push({ error: "email dan password salah" })
    } else {
        var token = jwt.sign({
            id: query[0].id,
            first_name: query[0].first_name,
            last_name: query[0].last_name,
            email: query[0].email,
            password: query[0].password,
            phone_number: query[0].phone_number,
        }, process.env.jwt_secret);

        res.status(200).json({
            status: true,
            message: "success",
            data: token
        });

    }

})

router.get('/profile/:id', checkAuth, async (req, res, next) => {
    var query = await db('users').where({id: req.params.id})
    res.json({
        data : query[0]
    })
})


module.exports = router
