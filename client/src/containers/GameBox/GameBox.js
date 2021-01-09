import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';

const GameBox = () => {

    return (
        <main className="main-container">
            <Header />
            <CheckerBoard />
            <ScoreBoard /> 
        </main>
    );
};

export default GameBox;