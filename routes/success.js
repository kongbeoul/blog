const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log(req.query.role)
    res.render("success", {
        role : req.query.role
    })
})

module.exports = router