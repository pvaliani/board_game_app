const rooms = require('../repositories/rooms').getRooms();
const User = require('../models/socket.io/user');


module.exports = (socket, io) => {
    socket.on('join-room', ({ userObj, roomName }) => {
        const user = new User(userObj.userName, userObj.wins, userObj.losses, socket.id);
        const room = rooms.getRoomByName(roomName);
        rooms.addUserToRoom(user, roomName);
        socket.join(roomName);
        io.sockets.in(roomName).emit('someone-joined', room)
        socket.emit('joined-room', room);
    });
};
