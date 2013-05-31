/*
 * author : yize <yize.shc@gmail.com>
 * date : 2013-05-30
 */
"use strict";
var minify = require('./lib/minify.js');
module.exports=function(cont){
    return minify(cont);
};