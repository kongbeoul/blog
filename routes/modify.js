const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req,res)=>{
    let data = JSON.parse(fs.readFileSync("view.json", "utf8"))
    let title = data[req.query.num]["title"].replace(/ /g, '');
    console.log(title)
    res.render("modify", {
        title: title,
        viewCon : data[req.query.num]["viewCon"],
        num : req.query.num
    })
})

module.exports = router