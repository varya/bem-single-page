({
    block: 'b-page',
    title: 'Single page application',
    js: true,
    head: [
        { elem: 'css', url: '_index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'index.bemhtml.js' },
        { elem: 'js', url: 'index.js' }
    ],
    content: ''
})
