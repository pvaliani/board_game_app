const assert = require('assert');
const Room = require('../models/socket.io/room.js');
const User = require('../models/user/user.js');

describe('Room', function () {
    beforeEach(function() {
        room1 = new Room([], "Lobby");
        user1 = new User('CoolBill');
        user2 = new User('FunkyAly', 1 , 2);
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
});