const Room = require('../models/socket.io/room');
const User = require('../models/socket.io/user');
const rooms = require('../repositories/rooms').getRooms();
const roomNameGen = require('../helpers/generate_room_name');

module.exports = socket => {
    socket.on('create-room', ({ grid, userName }) => {
        console.log(socket, 'create_room.js', 'line: ', '6');
        const roomName = roomNameGen(10);
        socket.join(roomName);
        const user = new User(userName, socket.id);
        const room = new Room(grid, socket.id, roomName);
        room.addUser(user);
        rooms.addRoom(room);
        socket.emit('room-created', { status: 'success' });
    });
};