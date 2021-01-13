import './CheckerBoard.css';
import Grid from '../Grid/Grid'
import GridMulti from '../GridMulti/GridMulti';

const CheckerBoard = ({ type, onSetUserScores, resetState, setResetState, setPlayerStats }) => {

    return (
        <section className="checker-board-section">
            {type === 'locally' ? <Grid
                setPlayerStats={setPlayerStats}
                onSetUserScores={onSetUserScores}
                resetState={resetState}
                setResetState={setResetState}
            /> : <GridMulti />}
        </section>
    );
};

export default CheckerBoard;