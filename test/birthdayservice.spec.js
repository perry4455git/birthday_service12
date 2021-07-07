//const { readAllFriends } = require('../src/readFriendsList')
const readFriendsList = require('../src/readFriendsList')
const{readAllFriends}=readFriendsList;
const { greetAllFriends } = require('../src/greetAllFriends')
const {assert} = require('chai')
const sinon = require("sinon")
const fs = require('fs')

describe('friendsModule', ()=>{

    describe('readAllFriends', ()=>{

        it('should throw an exception if no file path is passed', ()=>{

            assert.throws( ()=> readFriendsList.readAllFriends() ,"No File Path Specified");

        })

        it('should throw an exception if file path is invalid', ()=>{
            assert.throws(()=> readAllFriends("friendsList.json"), 'Not a valid path')
        })

        it('should return list of all friends', ()=>{

            const friends = [
                {
                  firstName: "John",
                  lastName: "Doe",
                  dateOfBirth: 1997 / 10 / 19,
                  email: "john.doe@gmail.com",
                },
                {
                  firstName: "Mary",
                  lastName: "Ann",
                  dateOfBirth: 1995 / 03 / 09,
                  email: "mary.ann@foobar.com",
                },
            ];

            const fake_ReadFileSync = sinon.fake.returns(friends);
            sinon.replace(fs, "readFileSync", fake_ReadFileSync);
            const filepath="./files/friendsList.json";
            const result = readAllFriends(filepath);
            assert.isArray(result);
            assert.equal(result.length, friends.length);
            assert.isTrue(fake_ReadFileSync.calledOnceWithExactly(filepath));

        });

    });

    describe('greetAllFriends', ()=>{

        it('should call readAllFriends function once',()=>{

            const fake_readAllFriends = sinon.fake.returns([])
            sinon.replace( readFriendsList , 'readAllFriends', fake_readAllFriends)
            const result = greetAllFriends("./file.txt");
            assert.isTrue(fake_readAllFriends.calledOnce);

        })

    })


})