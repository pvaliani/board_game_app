import './MultiRemote.css';
import { getSocket } from '../../socket.io/socket';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../Button/Button';

let socket;
const MultiRemote = () => {
    const [rooms, setRooms] = useState([]);
    const location = useLocation();
    const history = useHistory();

    // both users
    useEffect(() => {
        socket = getSocket();
        socket.on('rooms-list', rooms => {
            setRooms(rooms);
        });
        socket.emit('looking-for-room');

        return () => {
            socket.off('joined-room');
            socket.off('rooms-list');
        } 
    }, []);

    // joining room user 2
    const joinRoomHandler = roomName => {
        const userObj = location.state;
        const userName = location.state.userName;
        socket.emit('join-room', { userObj, roomName });
        socket.on('joined-room', room => {
            socket.emit('room-clean-up');
            history.push('/play-remotely', { user: 'user2', room: room, userName: userName, userObj: userObj });
        });
    };

    // creating room user 1
    const createGameHandler = () => {
        const user = location.state;
        socket.emit('create-room', { userObj: user }, room => {
            history.push('/play-remotely', { user: 'user1', userObj: user, room: room });
        });
    };

    const roomsJSX = rooms.map(room => {
        return <div key={room.name} style={{ cursor: 'pointer' }} onClick={() => joinRoomHandler(room.name)}>{room.users[0].userName}</div>;
    });

    return (
        <div>
            I am the multi remote
            <div className="rooms-list">
                {roomsJSX}
            </div>
            <Button title="Create game" onSubmit={createGameHandler} />
        </div>
    );
};

export default MultiRemote;