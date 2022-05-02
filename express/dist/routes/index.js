"use strict";
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    var param = { "値": "これはサンプルAPIです" };
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(param);
});
module.exports = router;
