const rooms = require('../repositories/rooms').getRooms();
const disconnecting = (socket, io, roomName) => {
    if (roomName) {
    } else {
        roomName = Array.from(socket.rooms).filter(id => id.length === 10)[0];
    }
    rooms.removeLeaverFromRoom(socket.id, roomName);
    rooms.cleanUp();
    socket.leave(roomName);
    io.emit('rooms-list', rooms.getAvailableRooms());
    socket.to(roomName).emit('opponent-left');
}
module.exports = (socket, io) => {

    socket.on('disconnecting', () => {
        disconnecting(socket, io);
    });

    socket.on('i-am-leaving', roomName => {
        console.log(roomName, 'disconnect.js', 'line: ', '26');
        disconnecting(socket, io, roomName);
    });

    socket.on('disconnect', () => {
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
    });


};