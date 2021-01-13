import './ScoreBoard.css';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import PlayerStats from '../PlayerStats/PlayerStats';

const ScoreBoard = ({ userScores, playerStats }) => {

    return (
        <section className="score-board-section">
            <ScoreCounter userScores={userScores} />
            <PlayerStats playerStats={playerStats}/>
        </section>
    );
};

export default ScoreBoard;