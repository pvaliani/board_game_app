const createRoom = require('./create_room');
const disconnect = require('./disconnect');
const looking_for_rooms = require('./looking_for_rooms');
const joinRoom = require('./join_room');
const moved = require('./moved');
const clean_up = require('./clean_up');
const i_won = require('./i_won');

module.exports = (io) => {

    io.on('connection', (socket) => {
        
    looking_for_rooms(socket);    
    createRoom(socket);
    joinRoom(socket, io);
    moved(socket);
    clean_up(socket, io);
    i_won(socket);
    disconnect(socket, io);

});
}

