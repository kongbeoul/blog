const express = require('express');
const router = express.Router();
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('view.json', 'utf8'))
let i=0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    length : data.length,
    result : data
  });
});

module.exports = router;
