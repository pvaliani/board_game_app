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
            /> : <GridMulti
                    setPlayerStats={setPlayerStats}
                    onSetUserScores={onSetUserScores}
                    resetState={resetState}
                    setResetState={setResetState}
                />}
        </section>
    );
};

export default CheckerBoard;