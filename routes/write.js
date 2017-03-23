const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    console.log(req.query)
    res.render('write')
})

module.exports = router