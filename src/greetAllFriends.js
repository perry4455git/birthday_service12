const fs = require('fs');
const readFriendsList=require("./readFriendsList");
//const {readAllFriends} = require('./readFriendsList')
const greetAllFriends = (filePath) => {
    
    readFriendsList.readAllFriends(filePath)

};

module.exports = { greetAllFriends };