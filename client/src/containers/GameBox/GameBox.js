import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';

const GameBox = () => {
    const [users, setUsers] = useState({});
    const [userScores, setUserScores] = useState({});
    const [resetState, setResetState] = useState("")

    return (
        <main className="main-container">
            <Header setResetState={setResetState} onSetUsers={setUsers}/>
            <CheckerBoard resetState={resetState} setResetState={setResetState} onSetUserScores={setUserScores} />
            <ScoreBoard userScores={userScores} /> 
        </main>
    );
};

export default GameBox;