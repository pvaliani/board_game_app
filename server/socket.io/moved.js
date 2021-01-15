module.exports = socket => {
    socket.on('i-moved', ({ currentPlayer, room,  currentPlayerSymbolIncoming}) => {
        socket.to(room.name).emit('opponent-moved', { room, currentPlayer, currentPlayerSymbolIncoming });
    });
};