const assert = require('assert');
const User = require('../models/socket.io/user.js');

describe('User', function () {
    beforeEach(function () {
        user = new User('ChrisP', 3, 0, '11235813');
    });

    it('should have a name', function() {
        assert.strictEqual(user.userName, 'ChrisP');
    });

    it('should have wins', function() {
        assert.strictEqual(user.wins, 3);
    });

    it('should have losses', function() {
        assert.strictEqual(user.losses, 0);
    });

    it('should have an ID', function() {
        assert.strictEqual(user.id, '11235813');
    });

});