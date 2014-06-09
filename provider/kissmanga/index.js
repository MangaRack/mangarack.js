// Enable restricted mode.
'use strict';
// Initialize the series module.
var Series = require('./series');

// ==================================================
// Export the function.
// --------------------------------------------------
module.exports = function (location) {
	// Determine if the location is valid ...
	return (/^http:\/\/kissmanga\.com\/Manga\//i).test(location) ?
		// ... and return a series ...
		new Series(location) :
		// ... or undefined.
		undefined;
};