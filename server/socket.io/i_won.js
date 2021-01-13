const rooms = require('../repositories/rooms').getRooms();

module.exports = (socket) => {
    socket.on('i-won', (roomName) => {
        socket.to(roomName).emit('play-again');
    });
};
