const express = require('express');
const User = require('../models/user/user');

const createRouter = collection => {
    router = express.Router();

    // get everything
    router.get('/', (req, res) => {
        collection.find().toArray()
            .then(result => {
                res.json(result);
            })
    });


    // create user router
    router.post('/verify-user', (req, res) => {

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
    return router;
};


module.exports = createRouter;