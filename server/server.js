const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const app = express();


app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('board_game');
        const usersCollection = db.collection('users');
        const usersRoute = createRouter(usersCollection);
        app.use('/api/users', usersRoute);
    })
    .catch(console.error);

const server = app.listen(5000, function () {
    console.log(`Server's app on port ${this.address().port}`);
});

