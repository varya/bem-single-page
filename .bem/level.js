exports.baseLevelPath = require.resolve('bem/lib/levels/simple');

var PATH = require('path'),
    BEM_TECHS = '../bem-bl/blocks-common/i-bem/bem/techs',
    BEM = require('bem');

exports.getTechs = function() {
    return {
        'bemjson.js': '',
	'js': 'js-i',
	'css': 'css',
        'bemhtml': PATH.join(BEM_TECHS, 'bemhtml.js')
    };
};

exports['match-block'] = function(path) {

	var match = new RegExp(['^([?!_|\.|\/].+)(.*?)$'].join(PATH.dirSepRe)).exec(path);
        if (!match) return false;
        return {
            block: match[1],
            suffix: match[2]
        };

};

exports.getConfig = function() {
    return BEM.util.extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../bem-bl/blocks-common',
            '../bem-bl/blocks-desktop'
        ])
    });
};
