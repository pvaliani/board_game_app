import './ScoreBoard.css';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import PlayerStats from '../PlayerStats/PlayerStats';
import Title from '../Title/Title';

const ScoreBoard = ({ userScores, playerStats }) => {

    return (
        <section className="score-board-section">
            <PlayerStats playerStats={playerStats}/>
            <Title />
            <ScoreCounter userScores={userScores} />
        </section>
    );
};

export default ScoreBoard;