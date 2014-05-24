// Implement a compiler for scss files using node-sass

// Include The 'fs' Module
var fs = require("fs");

// Include The 'node-sass' Module
var nodeSass = require("node-sass");

require.extensions[".scss"] = function(module, filename) {
    var content = fs.readFileSync(filename, "utf8");

    // Parse the file content and give to module.exports
    module.exports = nodeSass.renderSync({
        data: content
    });
};