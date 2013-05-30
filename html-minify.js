"use strict";
var path = require('path');
var fs = require('fs');
var minify = require('./lib/minify.js');
var file = path.resolve('./test/test1.html');
var cont = fs.readFileSync(file,{encoding:'utf-8'});

module.exports=function(cont){
    minify(cont);
};