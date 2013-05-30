"use strict";
var path = require('path');
var fs = require('fs');
var minify = require('html-minifier').minify;

var file = fs.readFileSync('./test1.html');

console.dir(minify);
console.log(minify(file).toString());