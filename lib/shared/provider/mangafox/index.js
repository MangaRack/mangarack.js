'use strict';
var Series = require('./series');

/**
 * Retrieves a series.
 * @param {string} address
 * @return {ISeries}
 */
module.exports = function(address) {
  return (/^http:\/\/mangafox\.(com|me)\/manga\//i).test(address) ?
    new Series(address) :
    undefined;
};