const path = require('path');
module.exports = {
    mode:"development",
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:"js/[name].js"
    },
    devServer:{
        port:1234
    }
}