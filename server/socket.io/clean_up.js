const rooms = require('../repositories/rooms').getRooms();

module.exports = (socket, io) => {

    socket.on('room-clean-up', () => {
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
    });

};