const rooms = require('../repositories/rooms').getRooms();
const disconnecting = (socket, io) => {
    console.log(socket.rooms, 'disconnect.js', 'line: ', '3');
    const roomName = Array.from(socket.rooms).filter(id => id.length === 10)[0];
    console.log(io.sockets.adapter.rooms, 'disconnect.js', 'line: ', '4');
    console.log(roomName, 'disconnect.js', 'line: ', '5');
    // console.log(rooms.getRoomByName(roomName).users, 'disconnect.js', 'line: ', '5');
    rooms.removeLeaverFromRoom(socket.id, roomName);
    // console.log(rooms.getRoomByName(roomName).users, 'disconnect.js', 'line: ', '7');
    rooms.cleanUp();
    io.emit('rooms-list', rooms.getAvailableRooms());
    socket.to(roomName).emit('opponent-left');
}
module.exports = (socket, io) => {

    socket.on('disconnecting', () => {
        disconnecting(socket, io);
    });

    socket.on('i-am-leaving', () => {
        disconnecting(socket, io);
    });

    socket.on('disconnect', () => {
        rooms.cleanUp();
        io.emit('rooms-list', rooms.getAvailableRooms());
    });

    
};