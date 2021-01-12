let io;

module.exports = {
    init: httpServer => require('socket.io')(httpServer, { cors: { origin: '*' } }),
    getIo: () => {
        if (!io) {
            throw new Error('Socket.io is not initialised');
        }
        return io;
    }
}