import openSocket from 'socket.io-client';

let socket;
export const initSocket = () => {
    socket = openSocket('https://not-checkers.herokuapp.com/');
    return socket;
};
export const getSocket = () => {
    if (!socket) {
        throw new Error('Socket.io is not initialised');
    }
    return socket;
}