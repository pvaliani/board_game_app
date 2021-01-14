const rooms = require('../repositories/rooms').getRooms();

module.exports = socket => {
    socket.on('send-initial-grid', ({ grid, roomName }, cb) => {
        const room = rooms.getRoomByName(roomName);
        if (room) {
            room.grid = grid;
        }
        cb(room);
    });
};