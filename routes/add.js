/**
 * Created by Administrator on 2015/12/13.
 * add content logic

 */

var express = require('express');
var router = express.Router();
var Product = require('../db/Product');

    router.post('/', function (req, res) {
    var product_name = req.body.name;
    var product_to_add = new Product({name:product_name,result:true,method:null});
    product_to_add.save(function (err) {
        res.send();
    });

});

module.exports = router;
