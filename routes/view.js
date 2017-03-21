const express = require('express')
const router = express.Router()
const fs = require('fs')
const data =  JSON.parse(fs.readFileSync('view.json', 'utf8'))
router.get('/', (req, res, next)=>{
    let num = req.query.num
    res.render('view', {
        title: data[num]["title"],
        author: data[num]["author"],
        date: data[num]["date"],
        viewCon: data[num]["viewCon"]
    })

})

module.exports = router