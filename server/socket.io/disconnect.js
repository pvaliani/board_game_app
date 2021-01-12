const rooms = require('../repositories/rooms').getRooms();

module.exports = (socket, io) => {
    socket.on('disconnecting', () => {
        const id = Array.from(socket.rooms).filter(id => id.length !== 10)[0];
        rooms.removeLeaverFromRoom(id);
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
        socket.to(id).emit('opponent-left');
    });

    socket.on('disconnect', () => {
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
    });

    socket.on('room-clean-up', () => {
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
    });
};