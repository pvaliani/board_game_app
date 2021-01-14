import { useHistory, useLocation } from 'react-router-dom';
import './WelcomePlayer.css';
import Button from '../Button/Button';
import { useState } from 'react';
import UserForm from '../UserForm/UserForm';

const WelcomePlayer = () => {
    const [twoPlayers, setTwoPlayers] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const playerTwoCb = (backEndUser) => {
        setReadyToPlay(backEndUser);
        setTimeout(() => {
            history.push('/play-locally', { user1: location.state, user2: backEndUser });
        }, 2000);
    }

    let buttonsForOneJSX = (
        <>
            <Button title="Multiplayer (locally)" onSubmit={() => setTwoPlayers(true)} />
            <Button title="Multiplayer (remotely)" onSubmit={() => history.push('/multi-remote', location.state)} />
        </>
    );
    let buttonsForTwoJSX;
    if (twoPlayers) {
        buttonsForOneJSX = null;
        buttonsForTwoJSX = (
            <div className="welcome-div-user2">
                <p>Enter name of player two: </p>
                <UserForm playerTwoCb={playerTwoCb} />
                <Button title="Multiplayer (remotely)" onSubmit={() => history.push('/multi-remote', location.state)} />
            </div>
        );
    }
    let secondPlayerJSX;
    let VSJSX;
    if (readyToPlay) {
        buttonsForTwoJSX = null;
        VSJSX = <div className="VS">VS</div>;
        secondPlayerJSX = (
            <div className="welcome-div-user1">
                <h1 className="welcome-user-name">{readyToPlay.userName}</h1>
                <div className="trophies">
                    <div className="trophy-icon">🏆</div>
                    <div className="trophy-icon">☠️</div>
                    <div className="user-score-welcome">{readyToPlay.wins}</div>
                    <div className="user-score-welcome">{readyToPlay.losses}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="welcome-container">
            <div className="welcome-div-user1">
                <h1 className="welcome-user-name">{location.state.userName}</h1>
                <div className="trophies">
                    <div className="trophy-icon">🏆</div>
                    <div className="trophy-icon">☠️</div>
                    <div className="user-score-welcome">{location.state.wins}</div>
                    <div className="user-score-welcome">{location.state.losses}</div>
                </div>
                {buttonsForOneJSX}
            </div>
            {VSJSX}
            {secondPlayerJSX}
            {buttonsForTwoJSX}
        </div>
    );
};

export default WelcomePlayer;