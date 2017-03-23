const express = require('express');
const router = express.Router();
const fs = require('fs')
let data = all = JSON.parse(fs.readFileSync('view.json', 'utf8'))
let initPost = 10
let length = Math.ceil(data.length / 10);
/* GET home page. */
router.get("/", (req,res,next)=>{
    if(req.url == "/"){
      res.redirect("/page?page=0")
    }
    // console.log(req.query)
})

router.get('/page', function(req, res, next) {
  if(!req.query.view){
    console.log(req.query)
    let pageNum = parseInt(req.query.page)
   
    if(all.length < 10){
        initPost = all.length
    }
    let start = parseInt(all.length - ( initPost * pageNum ))
    let end = parseInt(start - initPost)
    if(end < 0 ){
        end = 0
    }
    res.render('index', {
          result : all,
          pageNum : pageNum,
          length : length,
          start : start,
          end : end
    });
    // console.log("start : "+ start , "end : "+ end )
    


  }
  else{
    let viewNum = parseInt(req.query.view)
    let hit = parseInt(data[viewNum]["hit"])
    data[viewNum]["hit"] = hit +1
    fs.writeFile("view.json", JSON.stringify(data), "utf8", (err)=>{
            res.render('view', {
            num : viewNum,
            title: data[viewNum]["title"],
            author: data[viewNum]["author"],
            date: data[viewNum]["date"],
            viewCon: data[viewNum]["viewCon"]
        })
    })
  }
  
});
// router.get("/page/view", function(req,res,next){
//     console.log(req.url)
// })

module.exports = router;
