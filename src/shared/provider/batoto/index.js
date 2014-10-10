'use strict';
var regex = /^http:\/\/www\.batoto\.net\/comic\/_\/comics\/(.*)-r([0-9]+)/i;
var Series = require('./series');

/**
 * Retrieves a series.
 * @param {string} location
 * @returns {Series}
 */
module.exports = function (location) {
    return regex.test(location) ? new Series(location) : undefined;
};