import './CheckerBoard.css';
import Grid from '../Grid/Grid'
const CheckerBoard = ({ onSetUserScores, resetState, setResetState }) => {

    return (
        <section className="checker-board-section">
            <Grid resetState={resetState} setResetState={setResetState} onSetUserScores={onSetUserScores}/>
        </section>
    );
};

export default CheckerBoard;