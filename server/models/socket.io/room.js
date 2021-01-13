class Room {
    constructor (grid, name){
        this.users = [];
        this.grid = grid;
        this.name = name;
    }

    addUser(user) {
        if (this.roomAvailable()) {
            this.users.push(user);
        }
    }

    hasUserWithId(id) {
        return this.users.some(user => user.id === id);
    }

    removeUserById(id) {
        this.users = this.users.filter(user => user.id !== id);
    }

    isEmpty() {
        return this.users.length === 0;
    }

    roomAvailable() {
        return this.users.length < 2;
    }
}

module.exports = Room;