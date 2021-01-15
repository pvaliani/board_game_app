const express = require('express');
const User = require('../models/user/user');
const getDb = require('../database').getDb;

const createRouter = () => {
    const router = express.Router();

    // get everything
    router.get('/', (req, res) => {
        const collection = getDb().collection('users');
        collection.find().toArray()
            .then(result => {
                res.json(result);
            })
            .catch(console.error);
    });


    // create user router
    router.post('/verify-user', (req, res) => {
        const collection = getDb().collection('users');
        const playerObj = req.body; // {name: Pedram}
        // checking if player exists
        collection.findOne(playerObj)
            .then(result => {
                // if result doesn't exist => create player
                if (!result) {
                    // create player
                    const user = new User(playerObj.userName);
                    // inserting the player into the db
                    collection.insertOne(user) // this will give back a promise
                        .then(resCreatedPlayer => { // the result of the promise (now called resCreatedPlayer) is sent back to the front end
                            res.json(resCreatedPlayer.ops[0]); // send the player to the front end
                        })
                        .catch(console.error);
                    // send player to front end
                } else { // when the user exists in the db
                    // send player to front end
                    res.json(result);
                }
            })
            .catch(console.error);

    });

    // UPDATE: for incrementing user score
    router.patch('/:name', (req, res) => {
        const collection = getDb().collection('users');
        const userName = req.params.name;
        const updatedUserObj = req.body;
        collection.updateOne({ userName: userName }, { $set: updatedUserObj })
            .then(result => {
                res.json(result);
            })
            .catch(console.error);
    });

    return router;
};


module.exports = createRouter;