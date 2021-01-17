const createRoom = require('./create_room');
const disconnect = require('./disconnect');
const looking_for_rooms = require('./looking_for_rooms');
const joinRoom = require('./join_room');
const moved = require('./moved');
const clean_up = require('./clean_up');
const i_won = require('./i_won');
const sendInitialGrid = require('./send_initial_grid');
const chat_message = require('./chat_message');

module.exports = (io) => {

    io.on('connection', (socket) => {
    // grid socket
    looking_for_rooms(socket);    
    createRoom(socket);
    sendInitialGrid(socket);
    joinRoom(socket, io);
    moved(socket);
    clean_up(socket, io);
    i_won(socket);
    // chat socket
    chat_message(socket);
    disconnect(socket, io);


});
}

