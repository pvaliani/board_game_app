const createRoom = require('./create_room');
const joinRoom = require('./join_room');

module.exports = (io) => {

    io.on('connection', (socket) => {

    createRoom(socket);
    joinRoom(socket);
});
}

