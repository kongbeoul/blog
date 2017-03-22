const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser').urlencoded({extended:false})
const fs = require('fs')
let all = JSON.parse(fs.readFileSync("view.json", "utf8"))


router.post('/', (req, res)=>{
    if( !req.body.title || !req.body.viewCon ){
        res.send({redirect : false})
    }
    else{
        if(req.body.role == "등록"){
            all.push({
               title: req.body.title,
               author : req.body.author,
               date : req.body.date,
               viewCon : req.body.viewCon,
               hit: req.body.hit 
            })
            fs.writeFile("view.json", JSON.stringify(all), "utf8", (err)=>{
                res.send({redirect: "/success", role: "등록"})
            })
        }
        else{
            all[req.body.idx]["title"] = req.body.title
            all[req.body.idx]["viewCon"] = req.body.viewCon
            fs.writeFile("view.json", JSON.stringify(all), "utf8", (err)=>{
                res.send({redirect: "/success", role: "수정"})
            })
        }
    }
    
})

module.exports = router