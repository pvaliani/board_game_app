class RoomsClass {
    constructor() {
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    getRoomByName(name) {
        return this.rooms.filter(room => room.name === name);
    }

    addUserToRoom(user, roomName) {
        const room = this.getRoomByName(roomName);
        room.addUser(user);
    }
}

let rooms;
module.exports = {
    initRooms: () => {
        rooms = new RoomsClass();
        return rooms;
    },

    getRooms: () => {
        if (!rooms) {
            throw new Error('Rooms are not initialised');
        }
        return rooms;
    }
};