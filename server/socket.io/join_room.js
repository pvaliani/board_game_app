const rooms = require('../repositories/rooms').getRooms();
const User = require('../models/socket.io/user');
const fetchUserFromDb = require('../helpers/fetch_user_from_db');

module.exports = (socket, io) => {
    socket.on('join-room', ({ userObj, roomName }) => {
        const user = new User(userObj.userName, userObj.wins, userObj.losses, socket.id);
        const room = rooms.getRoomByName(roomName);
        rooms.addUserToRoom(user, roomName);
        socket.join(roomName);
        const userName1 = room.users[0].userName;
        const userName2 = room.users[1].userName;

        fetchUserFromDb(userName1) 
         .then(user1 => {
            room.users[0].wins = user1.wins;
            room.users[0].losses = user1.losses;
             return fetchUserFromDb(userName2);
         })
         .then(user2 => {
            room.users[1].wins = user2.wins;
            room.users[1].losses = user2.losses;
            io.sockets.in(roomName).emit('someone-joined', room)
            socket.emit('joined-room', room);
         });
         
    });
};
