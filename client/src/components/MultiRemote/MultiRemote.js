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


    const roomsJSX = rooms.map((room, i) => {
        const user = room.users[0];
        const userScore = user.wins / user.losses === Infinity ? user.wins : user.wins / user.losses || 0;
        return (
            <div key={user.userName} className={`user-row user-row${i % 2}`} onClick={() => joinRoomHandler(room.name)}>
                <div className="user-name">{i + 1}. {user.userName}</div>
                <div className="user-score">🏆{user.wins}</div>
                <div> ☠️{user.losses} </div>
                <div className="score-">Score ({userScore.toFixed(2)})</div>
            </div>
        );
    })


    return (
        <main className="landing-container">
            <div className="scores-table-container">
                <Button title="Create Game" onSubmit={createGameHandler} extraClass="btn-remote"/>
                <div className="OR-remote">OR</div>
                <h1 className="join-game-remote">Join a Game</h1>
                <div className="hr"></div>
                <div className="scores-table">
                    {roomsJSX}
                </div>
            </div>
        </main>
    );
};

export default MultiRemote;