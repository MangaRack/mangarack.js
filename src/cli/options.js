'use strict';
var Command = require('commander').Command;

/**
 * Creates the options.
 * @param {!Array.<string>} args
 * @return {!Options}
 */
module.exports = function (args) {
    return new Command().version(require('../../package').version)
        // Disables
        .option('-d, --duplication', 'Disable duplication prevention.')
        .option('-m, --meta', 'Disable embedded metadata.')
        // Filters
        .option('-c, --chapter <n>', 'The chapter filter.')
        .option('-v, --volume <n>', 'The volume filter.')
        // Settings
        .option('-e, --extension <s>', 'The file extension. (Default: cbz)')
        .option('-s, --source <s>', 'The source file. (Default: MangaRack.txt)')
        .parse(args);
};