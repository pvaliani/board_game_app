const assert = require('assert');
const Room = require('../models/socket.io/room.js');
const User = require('../models/socket.io/user.js');

describe('Room', function () {
    beforeEach(function() {
        room1 = new Room([], "Lobby");
        user1 = new User('CoolBill', 0, 0, '293jf8d4');
        user2 = new User('FunkyAly', 1 , 2, 'jdja830');
    });

    it('should contain a grid', function() {
        assert.deepStrictEqual(room1.grid, []);
    });

    it('should have a name', function() {
        assert.strictEqual(room1.name, 'Lobby');
    });

    it('should start with an empty array of users', function() {
        assert.deepStrictEqual(room1.users, []);
    });

    it('should be able to add users', function() {
        room1.addUser(user1);
        room1.addUser(user2);
        assert.deepStrictEqual(room1.users, [user1, user2]);
    });

    it('should have a user with an id', function() {
        room1.addUser(user1);
        assert.strictEqual(room1.users[0].id, '293jf8d4');
    });

    it('should remove user by ID', function() {
        room1.addUser(user2);
        room1.removeUserById('jdja830')
        assert.strictEqual(room1.users.length, 0);
    });

});