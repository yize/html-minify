"use strict";
var fs = require('fs');
var path = require('path');
var minifyCSS = require('clean-css').process;
var minify = require('html-minifier').minify;

//var uglify  = require('./lib/uglifyjs.js');
//JS压缩后输出的代码
//console.log(uglify(path.resolve('./test/normal.js')));

module.exports = function (f,options) {
    var options = { report: false,
        removeComments: true,
        collapseWhitespace: true,
        relativeTo: 'dist' };
    var min = minify(f, options);
    var minx = minifyCSS(min,options);
    console.log(minx);
};