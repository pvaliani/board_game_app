const fetchUserFromDb = (collection, userName) => {
    return collection.findOne({ userName });
};

module.exports = fetchUserFromDb;