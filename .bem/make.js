// Link up bem-bl
MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.2'
            }
        };

    },

    getBundlesLevels: function(from) {

        return ['./'];

    },

    getBlocksLevels: function() {

	return [
	    'bem-bl/blocks-common',
	    'bem-bl/blocks-desktop'
	];

    }

});

