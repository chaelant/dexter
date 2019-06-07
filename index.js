const dex = require('./lib/dex');

exportedMethods = {
    getDexEntry(name) {
        console.log(dex[name])
    }
};

module.exports = exportedMethods;
