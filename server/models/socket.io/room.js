class Room {
    constructor (grid, name, id){
        this.users = [];
        this.grid = grid;
        this.name = name;
        this.id = id;
    }

    addUser(user) {
        if (this.roomAvailable()) {
            this.users.push(user);
        }
    }

    roomAvailable() {
        return this.users.length < 2;
    }
}

module.exports = Room;