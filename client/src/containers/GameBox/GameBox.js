import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';

const GameBox = () => {
    const [users, setUsers] = useState({});
    const [userScores, setUserScores] = useState({});

    return (
        <main className="main-container">
            <Header onSetUsers={setUsers}/>
            <CheckerBoard onSetUserScores={setUserScores} />
            <ScoreBoard userScores={userScores} /> 
        </main>
    );
};

export default GameBox;