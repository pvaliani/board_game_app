import './ScoreBoard.css';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import PlayerStats from '../PlayerStats/PlayerStats';

const ScoreBoard = ({ userScores }) => {

    return (
        <section className="score-board-section">
            <ScoreCounter userScores={userScores} />
            <PlayerStats />
        </section>
    );
};

export default ScoreBoard;