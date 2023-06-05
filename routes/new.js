var express = require('express');
var router = express.Router();

const author = "";
const text = "";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form', { title: 'New Message', author: author, text: text});
  });

module.exports = router;
  