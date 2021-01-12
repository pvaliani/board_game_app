const createRoom = require('./create_room');
const disconnect = require('./disconnect');
const joinRoom = require('./join_room');
const moved = require('./moved');

module.exports = (io) => {

    io.on('connection', (socket) => {

    createRoom(socket);
    joinRoom(socket);
    moved(socket);
    disconnect(socket, io);
});
}

