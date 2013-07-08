/*
 * author : yize <yize.shc@gmail.com>
 * date : 2013-05-30
 */
"use strict";
var minifyCSS = require('clean-css').process;
var minify = require('html-minifier').minify;
var jsdom = require('jsdom');
var UglifyJS = require("uglify-js");
var path = require('path');

/*
 var uglify  = require('./lib/uglifyjs.js');
 JS压缩后输出的代码
 */

module.exports = function (f, callback) {
    var options = { report: false,
        removeComments: true,
        collapseWhitespace: true
    };

    jsdom.env({
        html: f,
        scripts: [path.resolve(__dirname, "./third/jquery.js")],
        done: function (errors, window) {
            if (errors)throw errors;
            window.$('style').each(function (index, style) {
                var result = minifyCSS(window.$(style).text(), options);
                window.$(style).html(result);
            });
            window.$('script').each(function (index, script) {
                var result = UglifyJS(window.$(script).text(), {fromString: true});
                window.$(script).html(result);
            });
            window.$('.jsdom').remove();
            var result = minify(window.document.documentElement.outerHTML,options);
            if(f.indexOf('<!doctype')>-1){
                result = window.document.doctype + result;
            }
            callback && callback(result);
        }
    });
};