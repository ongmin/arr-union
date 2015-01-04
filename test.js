/*!
 * arr-union <https://github.com/jonschlinkert/arr-union>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var should = require('should');
var union = require('./');

if (argv._.length) {
  union = require(path.resolve('benchmark/code/' + argv.code + '.js'));
}

describe('union', function () {
  it('should throw an error if the value passed is not an array:', function () {
    (function () {
      union();
    }).should.throw('arr-union expects an array as the first argument.');
  });

  it('should union all elements in the given arrays:', function () {
    union(['a'], ['b', 'c'], ['d', 'e', 'f']).sort().should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });

  it('should uniquify the arrays:', function () {
    union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']).sort().should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });
});

