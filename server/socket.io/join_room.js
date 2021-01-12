const rooms = require('../repositories/rooms').getRooms();
const User = require('../models/socket.io/user');

module.exports = socket => {
    socket.on('looking-for-room', () => {
        socket.emit('rooms-list', rooms.getAvailableRooms(socket.id));
        
        socket.on('join-room', ({userName, roomName}) => {
            console.log(roomName, 'join_room.js', 'line: ', '9');
            const user = new User(userName, socket.id);
            const room = rooms.getRoomByName(roomName);
            rooms.addUserToRoom(user, roomName);
            socket.join(roomName);
            socket.emit('joined-room', room);
        });

    });
};