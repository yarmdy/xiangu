const path = require('path')
const assets = require('./scripts/assetssetting');

module.exports = function(source){
    const extname = path.extname(this.resourcePath).toLowerCase();
    switch(extname){
        case '.html':
            source = processHtml(source);
            break;
        case '.css':
            source = processCss(source);
            break;
    }
    return source;
}

function processHtml(source){
    source = source.replace(/`/g,'\\`');
    source = source.replace(/\$/g,'*$*');
    source = source.replace(/@\{\{\s*(\S+?)\s*}\}/g,"${assets.$1}");
    source = eval('(`'+source+'`)');
    source = source.replace(/\*\$\*/g,'$');
    return source;
}
function processCss(source){
    return processHtml(source);
}