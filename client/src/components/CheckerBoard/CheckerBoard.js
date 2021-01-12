import './CheckerBoard.css';
import Grid from '../Grid/Grid'
const CheckerBoard = ({ onSetUserScores }) => {

    return (
        <section className="checker-board-section">
            <Grid onSetUserScores={onSetUserScores} />
        </section>
    );
};

export default CheckerBoard;