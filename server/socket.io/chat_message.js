module.exports = socket => {
    socket.on('sending-message', incData => {
        const roomName = incData.roomName;
        console.log(incData, 'chat_message.js', 'line: ', '4');
        socket.to(roomName).emit('incoming-message', incData.message);
    });
};