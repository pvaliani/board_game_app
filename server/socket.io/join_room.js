const { on } = require('nodemon');

const rooms = require('../repositories/rooms').getRooms();
const User = require('../models/socket.io/user');

module.exports = socket => {
    socket.on('looking-for-room', () => {
        socket.emit('rooms-list');
        
        socket.on('join-room', (userName, room) => {
            const user = new User(userName, socket);
            rooms.addUserToRoom(user, room);
            socket.join(room);
            socket.emit('joined-room', room);
        });

    });
};