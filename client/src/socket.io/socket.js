import openSocket from 'socket.io-client';

let socket;
export const initSocket = () => {
    socket = openSocket('https://not-checkers.herokuapp.com/');
    // socket = openSocket('http://localhost:5000');
    return socket;
};
export const getSocket = () => {
    if (!socket) {
        throw new Error('Socket.io is not initialised');
    }
    return socket;
}