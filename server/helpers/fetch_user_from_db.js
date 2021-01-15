const getDb = require('../database').getDb;
const fetchUserFromDb = (userName) => {
    const collection = getDb().collection('users');
    return collection.findOne({ userName });
};

module.exports = fetchUserFromDb;