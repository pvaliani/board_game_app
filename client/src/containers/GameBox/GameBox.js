import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';

const GameBox = ({ type }) => {
    const [users, setUsers] = useState({});
    const [userScores, setUserScores] = useState({});

    return (
        <main className="main-container">
            <Header onSetUsers={setUsers}/>
            <CheckerBoard type={type} onSetUserScores={setUserScores}/>
            <ScoreBoard userScores={userScores} /> 
        </main>
    );
};

export default GameBox;