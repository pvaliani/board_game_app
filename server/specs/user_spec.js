const assert = require('assert');
const User = require('../models/user/user.js');

describe('User', function () {
    beforeEach(function () {
        user1 = new User("Davy123"); 
    });

    it('should have a name', function () {
        assert.strictEqual(user1.userName, 'Davy123');
    });

    it('wins should start at zero', function () {
        assert.strictEqual(user1.wins, 0);
    });

    it('losses should start at zero', function () {
        assert.strictEqual(user1.losses, 0);
    });
    
});
