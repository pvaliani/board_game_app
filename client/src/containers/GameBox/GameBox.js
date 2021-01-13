import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';

const GameBox = ({ type }) => {
    const [userScores, setUserScores] = useState({});
    const [resetState, setResetState] = useState("");
    const [playerStats, setPlayerStats] = useState({});

    return (
        <main className="main-container">
            <Header setResetState={setResetState} />
            <CheckerBoard
                setPlayerStats={setPlayerStats}
                resetState={resetState}
                setResetState={setResetState}
                type={type}
                onSetUserScores={setUserScores}
            />
            <ScoreBoard userScores={userScores} playerStats={playerStats}/>
        </main>
    );
};

export default GameBox;