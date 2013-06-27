var fs = require('fs');

module.exports = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    normal: function (test) {
        test.expect(1);

        var actual = fs.readFileSync('test/fixtures/index.html').toString();
        var expected = fs.readFileSync('test/expected/index.html').toString();
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },

    gbk: function (test) {
        test.expect(1);

        var actual = fs.readFileSync('test/fixtures/index-gbk.html').toString();
        var expected = fs.readFileSync('test/expected/index-gbk.html').toString();
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    }
};