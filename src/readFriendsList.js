const fs = require('fs');

const readAllFriends = (filePath) => {
    if( !filePath ){
        throw new Error('No File Path Specified')
    }

    if(!fs.existsSync(filePath)){
        throw new Error('Not a valid path')
    }

    return fs.readFileSync(filePath);

}

module.exports = { readAllFriends }