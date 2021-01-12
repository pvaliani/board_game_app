import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';

const GameBox = () => {
    const [users, setUsers] = useState({});
    useEffect(() => {
        openSocket('http://localhost:5000');
    }, []);

    return (
        <main className="main-container">
            <Header onSetUsers={setUsers}/>
            <CheckerBoard />
            <ScoreBoard /> 
        </main>
    );
};

export default GameBox;