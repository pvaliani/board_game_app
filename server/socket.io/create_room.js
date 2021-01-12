const Room = require('../models/socket.io/room');
const User = require('../models/socket.io/user');
const rooms = require('../repositories/rooms').getRooms();
const roomNameGen = require('../helpers/generate_room_name');

module.exports = socket => {
    socket.on('create-room', ({ grid, userName }, cb) => {
        const roomName = roomNameGen(10);
        socket.join(roomName);
        const user = new User(userName, socket.id);
        const room = new Room(grid, socket.id, roomName);
        room.addUser(user);
        cb(room); // set room as react state
        rooms.addRoom(room);
        socket.broadcast.emit('room-created', rooms.getAvailableRooms());
    });
};