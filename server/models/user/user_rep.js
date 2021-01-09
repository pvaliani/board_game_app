const User = require('./user');

// insert a user
const insertUser = (user, collection) => {
    // check if user exists

    // if user does not exist add them
    return collection.insertOne(user)
     .then(res => res)
     .catch(err => err);

};

module.exports = {
    insertUser
};
