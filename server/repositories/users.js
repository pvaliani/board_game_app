class UsersClass {
    constructor() {
        this.users = [];
    }
}

let users;
module.exports = {
    initUsers: () => {
        users = new UsersClass();
        return users;
    },
    
    getUsers: () => {
        if (!users) {
            throw new Error('Users are not initialised');
        }
        return users;
    }
};