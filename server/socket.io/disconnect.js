const rooms = require('../repositories/rooms').getRooms();
const disconnecting = (socket, io) => {
    const roomName = Array.from(socket.rooms).filter(id => id.length === 10)[0];
    console.log(rooms.rooms[0] && rooms.rooms[0].users, 'disconnect.js', 'line: ', '9');
    rooms.removeLeaverFromRoom(socket.id, roomName);
    console.log(rooms.rooms[0] && rooms.rooms[0].users, 'disconnect.js', 'line: ', '11');
    rooms.cleanUp();
    io.emit('rooms-list', rooms.getAvailableRooms());
    socket.to(roomName).emit('opponent-left');
}
module.exports = (socket, io) => {

    socket.on('disconnecting', () => {
        disconnecting(socket, io);
    });

    socket.on('disconnecting-client', () => {
        disconnecting(socket, io);
    });

    socket.on('disconnect', () => {
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
    });

    
};