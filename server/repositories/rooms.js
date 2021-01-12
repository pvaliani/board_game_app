class RoomsClass {
    constructor() {
        this.rooms = [];
    }

    cleanUp() {
        this.rooms = this.rooms.filter(room => !room.isEmpty());
    }
 
    addRoom(room) {
        this.rooms.push(room);
    }

    getRoomByName(name) {
        return this.rooms.filter(room => room.name === name)[0];
    }

    addUserToRoom(user, roomName) {
        const room = this.getRoomByName(roomName);
        room.addUser(user);
    }

    getAvailableRooms(socetId) {
        if (socetId) {
            const availableRooms = this.rooms.filter(room => room.roomAvailable());
            return availableRooms.filter(room => !room.hasUserWithId(socetId));
        }
        return this.rooms.filter(room => room.roomAvailable());
    }

    removeLeaverFromRoom(id) {
            const room = this.getRoomByName(id);
            room && room.removeUserById(id);
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