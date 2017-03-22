const express = require('express')
const router = express.Router()
const fs = require('fs')
let data =  JSON.parse(fs.readFileSync('view.json', 'utf8'))
router.get('/', (req, res, next)=>{
    let num = req.query.num
    let hit = parseInt(data[num]["hit"])

    data[num]["hit"] = hit +1
    fs.writeFile("view.json", JSON.stringify(data), "utf8", (err)=>{
            res.render('view', {
            num : num,
            title: data[num]["title"],
            author: data[num]["author"],
            date: data[num]["date"],
            viewCon: data[num]["viewCon"]
        })
    })
    

})

module.exports = router