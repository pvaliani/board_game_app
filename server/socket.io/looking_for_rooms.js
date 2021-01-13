const rooms = require('../repositories/rooms').getRooms();

module.exports = socket => {
    socket.on('looking-for-room', () => {
        socket.emit('rooms-list', rooms.getAvailableRooms(socket.id));
    });
};