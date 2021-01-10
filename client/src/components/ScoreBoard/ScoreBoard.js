import './ScoreBoard.css';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import PlayerStats from '../PlayerStats/PlayerStats';

const ScoreBoard = () => {

    return (
        <section className="score-board-section">
            <ScoreCounter />
            <PlayerStats />
        </section>
    );
};

export default ScoreBoard;