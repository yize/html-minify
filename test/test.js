"use strict";
var path = require('path');
var jsp = require('uglify-js').parser;
var pro = require("uglify-js").uglify;
var fs = require('fs');
//

fs.readFile('./normal.js', {
    encoding:'utf-8'
},function (err, data) {
    var ast = jsp.parse(data);
    console.log(pro.gen_code(ast));
    if (err) throw err;
});

//console.log(uglify);
//console.dir(uglify);

//console.log(uglify);