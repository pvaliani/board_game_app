import './GameBox.css';
import Header from '../../components/Header/Header';
import CheckerBoard from '../../components/CheckerBoard/CheckerBoard';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';

const GameBox = ({ type }) => {

    return (
        <main className="main-container">
            <Header />
            <CheckerBoard type={type}/>
            <ScoreBoard /> 
        </main>
    );
};

export default GameBox;