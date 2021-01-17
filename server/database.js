const MongoClient = require('mongodb').MongoClient;

let _db;
const uri = `mongodb+srv://ntheodoropoulos:nikblod1!@users.v8tlj.mongodb.net/bang-checkers?retryWrites=true&w=majority`;
const mongoConnect = cb => {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(client => {
            console.log('connected to db');
            _db = client.db();
            cb();
        })
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw new Error('No database found');
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;