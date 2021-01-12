import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';

const GameBox = () => {
    const [users, setUsers] = useState({});
    

    return (
        <main className="main-container">
            <Header onSetUsers={setUsers}/>
            <CheckerBoard />
            <ScoreBoard /> 
        </main>
    );
};

export default GameBox;