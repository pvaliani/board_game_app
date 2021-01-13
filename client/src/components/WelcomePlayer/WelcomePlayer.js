import { useHistory, useLocation } from 'react-router-dom';
import './WelcomePlayer.css';
import Button from '../Button/Button';
import { useState } from 'react';
import UserForm from '../UserForm/UserForm';

const WelcomePlayer = () => {
    const [twoPlayers, setTwoPlayers] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const playerTwoCb = (backEndUser) => {
        history.push('/play-locally', {user1: location.state, user2:backEndUser});
    }

    let oneOrTwoJSX = (
        <>
            <Button title="Multiplayer (locally)" onSubmit={() => setTwoPlayers(true)} />
            <Button title="Multiplayer (remotely)" onSubmit={() => history.push('/multi-remote', location.state)} />
        </>
    );

    if (twoPlayers) {
        oneOrTwoJSX = (
            <>
                <p>Enter name of player two: </p>
                <UserForm playerTwoCb={playerTwoCb}/>
                <Button title="Multiplayer (remotely)" onSubmit={() => history.push('/multi-remote', location.state)} />
            </>
        );
    }

    return (
        <div>
            <div>Welcome {location.state.userName}</div>
            {oneOrTwoJSX}
        </div>
    );
};

export default WelcomePlayer;