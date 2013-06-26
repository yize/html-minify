/*
 * author : yize <yize.shc@gmail.com>
 * date : 2013-05-30
 */
"use strict";
var minifyCSS = require('clean-css').process;
var minify = require('html-minifier').minify;

//var uglify  = require('./lib/uglifyjs.js');
//JS压缩后输出的代码
//console.log(uglify(path.resolve('./test/normal.js')));

module.exports = function (f) {
    var options = { report: false,
        removeComments: true,
        collapseWhitespace: true
    };
    var min = minify(f, options);
    var minx = minifyCSS(min, options);
    return minx;
};