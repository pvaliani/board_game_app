const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router');
const mongoConnect = require('./database').mongoConnect;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const usersRoute = createRouter();
app.use('/api/users', usersRoute);

mongoConnect(() => {
    const server = app.listen(process.env.PORT || 5000, function () {
        require('./repositories/rooms').initRooms();
        require('./repositories/users').initUsers();
        const io = require('./socket.io/socket').init(server);
        require('./socket.io/setting_up_socket')(io);
        console.log(`Server's app on port ${this.address().port}`);

    });
});
// MongoClient.connect(mongouriDEV, { useUnifiedTopology: true })
//     .then(client => {
//         const db = client.db('board_game');
//         const usersCollection = db.collection('users');

//     })
//     .catch(console.error);


