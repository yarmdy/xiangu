const path = require('path')

module.exports = function(source){
    const extname = path.extname(this.resourcePath).toLowerCase();
    return source;
}