const rooms = require('../repositories/rooms').getRooms();
const User = require('../models/socket.io/user');


module.exports = socket => {
    socket.on('join-room', ({userName, roomName}) => {
    const user = new User(userName, socket.id);
    const room = rooms.getRoomByName(roomName);
    rooms.addUserToRoom(user, roomName);
    socket.join(roomName);
    socket.emit('joined-room', room);
});
};
